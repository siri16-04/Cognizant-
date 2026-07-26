import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(

    catchError(error => {

      console.error('Global HTTP Error:', error);

      if (error.status === 401) {
        alert('Unauthorized! Redirect to Login.');
      }

      if (error.status === 500) {
        alert('Server Error!');
      }

      return throwError(() => error);

    })

  );

};