import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCard } from './course-card';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

beforeEach(async () => {

  await TestBed.configureTestingModule({

    imports: [

      CourseCard,

      RouterTestingModule

    ]

  }).compileComponents();

  fixture = TestBed.createComponent(CourseCard);

  component = fixture.componentInstance;

});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display course name', () => {

  component.course = {

    id: 1,

    name: 'Data Structures',

    code: 'CS101',

    credits: 4,

    gradeStatus: 'passed'

  };

  fixture.detectChanges();

  const heading = fixture.debugElement.query(By.css('h2'));

  expect(heading.nativeElement.textContent)

    .toContain('Data Structures');

});
});
