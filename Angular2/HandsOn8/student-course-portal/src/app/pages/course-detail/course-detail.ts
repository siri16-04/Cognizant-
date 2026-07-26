import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  course?: Course;
  students: any[] = [];
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Load course
    this.courseService.getCourseById(id).subscribe({

      next: (course) => {
  console.log('Course Loaded:', course);
  alert(JSON.stringify(course));
  this.course = course;
},

      error: (err) => {
        console.error('Course Error:', err);
        this.errorMessage = err.message;
      }

    });

    // Load students using switchMap
    this.route.paramMap.pipe(

      switchMap(params => {

        const courseId = Number(params.get('id'));

        return this.enrollmentService.getStudentsByCourse(courseId);

      })

    ).subscribe({

      next: (students) => {
        console.log('Students:', students);
        this.students = students;
      },

      error: (err) => {
        console.error('Student Error:', err);
      }

    });

  }

}