import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, Highlight, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

 @Input() course!: {
  id:number,
  name:string,
  code:string,
  credits:number,
  gradeStatus:string,
  enrolled:boolean
};

  @Output() enrollRequested = new EventEmitter<number>();
  // Getter keeps template clean by moving logic from HTML to TypeScript.
get cardClasses() {
  return {
    'card--enrolled': this.course.gradeStatus === 'passed',
    'card--full': this.course.credits >= 4,
    'expanded': this.isExpanded
  };
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes['course']);
  }

  enroll() {
    this.enrollRequested.emit(this.course.id);
  }
  isExpanded = false;

  toggleDetails() {
  this.isExpanded = !this.isExpanded;
}
  getBorderColor() {

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