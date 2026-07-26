import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  CourseCard
],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
constructor(
  private courseService: CourseService,
  private router: Router,
  private route: ActivatedRoute
) {}
  isLoading = signal(true);

  selectedCourseId: number | null = null;
  searchTerm = '';
  courses: Course[] = [];
  errorMessage = '';
ngOnInit(): void {

  this.searchTerm =
    this.route.snapshot.queryParamMap.get('search') ?? '';

  this.courseService.getCourses().subscribe({

    next: (courses) => {

      this.courses = courses;

    },

    error: (err) => {

      this.errorMessage = err.message;
      this.isLoading.set(false);

    },

    complete: () => {

      console.log('Course List Loaded');
      this.isLoading.set(false);

    }

  });

}

 onEnroll(courseId: number): void {

  this.selectedCourseId = courseId;

  this.router.navigate(['courses', courseId]);

}
updateSearch() {

  this.router.navigate(
    ['courses'],
    {
      queryParams: {
        search: this.searchTerm
      }
    }
  );

}

  // trackBy improves performance by reusing DOM elements
  // instead of recreating every course card.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

}