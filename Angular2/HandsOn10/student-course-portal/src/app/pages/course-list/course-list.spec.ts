import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  provideRouter,
  ActivatedRoute,
  convertToParamMap
} from '@angular/router';
import { of } from 'rxjs';

import { CourseList } from './course-list';
import { CourseService } from '../../services/course';

describe('CourseList', () => {

  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;

  const mockCourseService = {

    getCourses: () => of([
      {
        id: 1,
        name: 'Java',
        code: 'JAVA101',
        credits: 4,
        gradeStatus: 'passed'
      }
    ])

  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseList],

      providers: [

        provideRouter([]),

        {
          provide: CourseService,
          useValue: mockCourseService
        },

        {
          provide: ActivatedRoute,
          useValue: {

            snapshot: {

              paramMap: convertToParamMap({
                id: '1'
              }),

              queryParamMap: convertToParamMap({
                search: ''
              })

            },

            paramMap: of(
              convertToParamMap({
                id: '1'
              })
            )

          }

        }

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});