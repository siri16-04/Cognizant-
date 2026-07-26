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
  addNewCourse() {

  this.courseService.addCourse({

    id: 6,

    name: 'React',

    code: 'REACT101',

    credits: 3,

    gradeStatus: 'pending'

  });

  this.courseCount = this.courseService.getCourses().length;

}
  ngOnInit(): void {
  this.courseCount = this.courseService.getCourses().length;
  console.log('✅ HomeComponent initialized - courses loaded');

}

ngOnDestroy(): void {

  console.log('❌ HomeComponent destroyed');

}

}