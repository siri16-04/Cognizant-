import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { CourseDetail } from './course-detail';

describe('CourseDetail', () => {

  let component: CourseDetail;
  let fixture: ComponentFixture<CourseDetail>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseDetail],

      providers: [

        provideRouter([]),

        {
          provide: ActivatedRoute,
          useValue: {

            snapshot: {
              paramMap: convertToParamMap({
                id: '1'
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

    fixture = TestBed.createComponent(CourseDetail);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});