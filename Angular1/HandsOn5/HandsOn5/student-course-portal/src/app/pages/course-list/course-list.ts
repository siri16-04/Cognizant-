import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = signal(true);

  selectedCourseId: number | null = null;

courses = [

  {
    id:1,
    name:'Java Programming',
    code:'JAVA101',
    credits:4,
    gradeStatus:'passed',
    enrolled:true
  },

  {
    id:2,
    name:'Angular',
    code:'ANG201',
    credits:3,
    gradeStatus:'pending',
    enrolled:false
  },

  {
    id:3,
    name:'Spring Boot',
    code:'SPR301',
    credits:4,
    gradeStatus:'passed',
    enrolled:true
  },

  {
    id:4,
    name:'SQL',
    code:'SQL401',
    credits:2,
    gradeStatus:'failed',
    enrolled:false
  },

  {
    id:5,
    name:'Microservices',
    code:'MS501',
    credits:0,
    gradeStatus:'pending',
    enrolled:false
  }

];

  ngOnInit(): void {

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