// [property] = One-way binding (Component ➜ DOM)
// [(ngModel)] = Two-way binding (Component ↔ DOM)

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { Notification } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseSummaryWidget,
    Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  constructor(private courseService: CourseService) {}

  // String Interpolation
  portalName = 'Student Course Portal';

  // Property Binding
  isPortalActive = true;

  // Event Binding
  message = '';

  // Two-way Binding
  searchTerm = '';

  courseCount = 0;

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  // POST
  addNewCourse() {

    this.courseService.createCourse({

      name: 'React',

      code: 'REACT101',

      credits: 3,

      gradeStatus: 'pending'

    }).subscribe({

      next: () => {

        alert('Course Added Successfully!');
        this.loadCourseCount();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  // PUT
  updateFirstCourse() {

    const updatedCourse = {

      id: 1,

      name: 'Advanced Java',

      code: 'JAVA101',

      credits: 5,

      gradeStatus: 'passed' as const

    };

    this.courseService.updateCourse(updatedCourse).subscribe({

      next: (course) => {

        console.log(course);
        alert('Course Updated Successfully!');

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  // DELETE
  deleteLastCourse() {

    const id = this.courseCount;

    this.courseService.deleteCourse(id).subscribe({

      next: () => {

        alert('Course Deleted Successfully!');
        this.loadCourseCount();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  loadCourseCount() {

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.courseCount = courses.length;

      }

    });

  }

  ngOnInit(): void {

    this.loadCourseCount();

    console.log('✅ HomeComponent initialized - courses loaded');

  }

  ngOnDestroy(): void {

    console.log('❌ HomeComponent destroyed');

  }

}