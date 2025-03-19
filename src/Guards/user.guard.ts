import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenticationService } from '../app/Services/user-authentication.service';
@Injectable({
  providedIn: 'root'  
})

export class AuthGuardService{
constructor(private userauth:UserAuthenticationService,private router:Router) { } 
CanActivateFn():boolean{
  if(this.userauth.iUserLoggedIn){
return true;
  }else{
    alert("You Should Log In First");  
    this.router.navigateByUrl('/'); 
    return false;
  }
}
}


export const userGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuardService).CanActivateFn();
};
