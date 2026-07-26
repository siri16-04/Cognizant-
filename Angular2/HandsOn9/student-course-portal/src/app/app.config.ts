import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { provideState } from '@ngrx/store';

import { courseReducer } from './store/course/course.reducer';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CourseEffects } from './store/course/course.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    provideHttpClient(
      withInterceptors([authInterceptor])
    ),

    provideStore(),
    provideState('course', courseReducer),
    provideState('enrollment', enrollmentReducer),
    //provideEffects(CourseEffects),

    provideStoreDevtools({
      maxAge: 25
    })
  ]
};