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

  ngOnInit(): void {
   this.courses = this.courseService.getCourses();

this.searchTerm =
  this.route.snapshot.queryParamMap.get('search') ?? '';
    console.log('Course List Loaded');

    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);

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