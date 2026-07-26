import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = () => {

  console.log("✅ Guard Executed");

  const auth = inject(Auth);
  const router = inject(Router);

  console.log("Login Status:", auth.isLoggedIn);

  if (auth.isLoggedIn) {
    console.log("Allowed");
    return true;
  }

  console.log("Redirecting to Home");
  router.navigate(['/']);
  return false;
};