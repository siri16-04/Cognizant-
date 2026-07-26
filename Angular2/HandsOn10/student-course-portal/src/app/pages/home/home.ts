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

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  courseCount = 0;

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  addNewCourse(): void {

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

  updateFirstCourse(): void {

    const updatedCourse = {

      id: 1,

      name: 'Advanced Java',

      code: 'JAVA101',

      credits: 5,

      gradeStatus: 'passed' as const

    };

    this.courseService.updateCourse(updatedCourse).subscribe({

      next: () => {

        alert('Course Updated Successfully!');

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  deleteLastCourse(): void {

    this.courseService.deleteCourse(this.courseCount).subscribe({

      next: () => {

        alert('Course Deleted Successfully!');
        this.loadCourseCount();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  loadCourseCount(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.courseCount = courses.length;

      },

      error: (err) => {

        console.error('Failed to load courses:', err);

      }

    });

  }

  ngOnInit(): void {

    this.loadCourseCount();

    console.log('✅ HomeComponent initialized');

  }

  ngOnDestroy(): void {

    console.log('❌ HomeComponent destroyed');

  }

}