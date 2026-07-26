import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  constructor(private courseService: CourseService) {}

  isLoading = signal(true);

  selectedCourseId: number | null = null;

courses: Course[] = [];

  ngOnInit(): void {
   this.courses = this.courseService.getCourses();
    console.log('Course List Loaded');

    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);

  }

  onEnroll(courseId: number): void {

    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;

  }

  // trackBy improves performance by reusing DOM elements
  // instead of recreating every course card.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

}