import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [

    {
      id: 1,
      name: 'Java Programming',
      code: 'JAVA101',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: 'Angular',
      code: 'ANG201',
      credits: 3,
      gradeStatus: 'pending'
    },

    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR301',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 4,
      name: 'SQL',
      code: 'SQL401',
      credits: 2,
      gradeStatus: 'failed'
    },

    {
      id: 5,
      name: 'Microservices',
      code: 'MS501',
      credits: 4,
      gradeStatus: 'pending'
    }

  ];

  constructor() {}

  getCourses(): Course[] {

    return this.courses;

  }

  getCourseById(id: number): Course | undefined {

    return this.courses.find(course => course.id === id);

  }

  addCourse(course: Course): void {

    this.courses.push(course);

  }

}