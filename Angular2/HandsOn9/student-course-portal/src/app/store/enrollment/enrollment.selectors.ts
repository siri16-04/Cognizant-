import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { EnrollmentState } from './enrollment.state';

export const selectEnrollmentState =
  createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(

  selectEnrollmentState,

  state => state.enrolledCourseIds

);