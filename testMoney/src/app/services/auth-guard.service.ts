import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from '../page/service/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {


     constructor(private router: Router, private authService: AuthService) { }


     canActivate() {
    if (localStorage.getItem('token')) {
      // logged in so return true
      /* console.log( JSON.parse(localStorage.getItem('currentUser')).username ); */
      return true;
    }
    console.log(localStorage.getItem('token'));
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
