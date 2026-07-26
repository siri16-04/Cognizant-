import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  // ==========================
  // GET ALL COURSES
  // ==========================
  getCourses(): Observable<Course[]> {

    return this.http.get<Course[]>(this.apiUrl).pipe(

      retry(2),

      tap(courses => {
        console.log("Courses loaded:", courses.length);
      }),

      map(courses =>
        courses.filter(course => course.credits > 0)
      ),

      catchError(error => {

        console.error("HTTP Error:", error);

        return throwError(() =>
          new Error("Failed to load courses. Please try again.")
        );

      })

    );

  }

  // ==========================
  // GET COURSE BY ID
  // ==========================
  getCourseById(id: number): Observable<Course> {

    console.log("Calling:", `${this.apiUrl}/${id}`);

    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(

      tap(course => {
        console.log("Course Loaded:", course);
      }),

      catchError(error => {

        console.error("Course Error:", error);

        return throwError(() =>
          new Error("Failed to load course.")
        );

      })

    );

  }

  // ==========================
  // CREATE COURSE
  // ==========================
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {

    return this.http.post<Course>(this.apiUrl, course);

  }

  // ==========================
  // UPDATE COURSE
  // ==========================
  updateCourse(course: Course): Observable<Course> {

    return this.http.put<Course>(
      `${this.apiUrl}/${course.id}`,
      course
    );

  }

  // ==========================
  // DELETE COURSE
  // ==========================
  deleteCourse(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }

}