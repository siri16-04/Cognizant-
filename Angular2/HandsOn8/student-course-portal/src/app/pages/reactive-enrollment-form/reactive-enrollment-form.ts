import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
  FormArray,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  noCourseCode(control: AbstractControl): ValidationErrors | null {

  const value = control.value;

  if (value && value.toString().startsWith('XX')) {

    return { noCourseCode: true };

  }

  return null;

}
simulateEmailCheck(): AsyncValidatorFn {

  return (control: AbstractControl): Promise<ValidationErrors | null> => {

    return new Promise((resolve) => {

      setTimeout(() => {

        const email = control.value;

        if (email && email.includes('test@')) {

          resolve({ emailTaken: true });

        } else {

          resolve(null);

        }

      }, 800);

    });

  };

}
  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

     studentEmail: [
  '',
  [Validators.required, Validators.email],
  [this.simulateEmailCheck()]
],
       courseId: [
        '',
       [Validators.required, this.noCourseCode.bind(this)]
       ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
  false,
  Validators.requiredTrue
],

additionalCourses: this.fb.array([])

    });

  }
  get additionalCourses(): FormArray<FormControl> {
  return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;
}
addCourse() {
  this.additionalCourses.push(
    new FormControl('', { nonNullable: true, validators: [Validators.required] })
  );
}

removeCourse(index: number) {

  this.additionalCourses.removeAt(index);

}
  // value -> excludes disabled controls
  // getRawValue() -> includes disabled controls

  onSubmit() {

    console.log("Form Value:", this.enrollForm.value);

    console.log("Raw Value:", this.enrollForm.getRawValue());

  }

}