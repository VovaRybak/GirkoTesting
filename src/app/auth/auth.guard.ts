import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
		private router: Router
		) {}
  canActivate() {
    if (localStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate(['./auth/signin']);
      return false;
    }
  }
}
