import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  isloggedsubgect: BehaviorSubject<boolean>;
  isAdminSubject: BehaviorSubject<boolean>;

  constructor() { 
    this.isloggedsubgect = new BehaviorSubject<boolean>(false);
    this.isAdminSubject = new BehaviorSubject<boolean>(false);
  }

  LogIn(isAdmin: boolean) {
    let usertoken = "123456";
    localStorage.setItem('usertoken', usertoken);
    this.isloggedsubgect.next(true);
    this.isAdminSubject.next(isAdmin);
  }

  LogOut() {
    localStorage.removeItem('usertoken');
    this.isloggedsubgect.next(false);
    this.isAdminSubject.next(false);
  }

  get iUserLoggedIn(): boolean {
    return localStorage.getItem('usertoken') ? true : false;
  }

  IsUserLoggedSubject() {
    return this.isloggedsubgect;
  }

  getIsAdmin() {
    return this.isAdminSubject.asObservable();
  }
}