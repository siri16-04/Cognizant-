import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private apiUrl = 'http://localhost:3000';

  private enrolledCourseIds: number[] = [];

  constructor(private http: HttpClient) {}

  enroll(courseId: number): void {

    if (!this.enrolledCourseIds.includes(courseId)) {

      this.enrolledCourseIds.push(courseId);

    }

  }

  unenroll(courseId: number): void {

    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);

  }

  isEnrolled(courseId: number): boolean {

    return this.enrolledCourseIds.includes(courseId);

  }

  getEnrolledCourses(): Course[] {

    return [];

  }

  // Step 87
  getStudentsByCourse(courseId: number): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.apiUrl}/students?courseId=${courseId}`
    );

  }

}