import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Course } from '../../models/course';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  constructor(
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes['course']);
  }

  enroll(): void {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

    }

    this.enrollRequested.emit(this.course.id);

  }

  isEnrolled(): boolean {

    return this.enrollmentService.isEnrolled(this.course.id);

  }

  toggleDetails(): void {

    this.isExpanded = !this.isExpanded;

    if (this.isExpanded) {

      this.router.navigate(['/courses', this.course.id]);

    } else {

      this.router.navigate(['/courses']);

    }

  }

  get cardClasses() {

    return {

      'card--enrolled': this.course.gradeStatus === 'passed',

      'card--full': this.course.credits >= 4,

      'expanded': this.isExpanded

    };

  }

  getBorderColor(): string {

    switch (this.course.gradeStatus) {

      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'gray';

    }

  }

}