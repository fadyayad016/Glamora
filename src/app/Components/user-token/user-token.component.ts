import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../../Services/user-authentication.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DynamicUserService } from '../../Services/dynamic-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-token',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule], 
  providers:[DynamicUserService],
  templateUrl: './user-token.component.html',
  styleUrl: './user-token.component.css'
})
export class UserTokenComponent implements OnInit {
  isUserLoggedIn: boolean = false;  
  userregister: FormGroup;
  showSignupLink: boolean = false; // New flag

  
  constructor(
    private userAuth: UserAuthenticationService,
    private fb: FormBuilder, 
    private router: Router, 
    private dynamicuser: DynamicUserService
  ) {
    this.userregister = this.fb.group({
      fullname: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get fullname() {
    return this.userregister.get('fullname');
  } 

  get password() {
    return this.userregister.get('password');
  }

 // In UserTokenComponent's onSubmit method
 onSubmit() {
  this.showSignupLink = false;

  if (this.userregister.valid) {
    this.dynamicuser.GetAllUser().subscribe({
      next: (users: any[]) => {
        const user = users.find(u => 
          u.fullname.toLowerCase() === this.userregister.value.fullname.toLowerCase()
        );

       // In UserTokenComponent's onSubmit
if (user) {
  // Check if fullname is "Admin" (case-sensitive match)
  const isAdmin = user.fullname === 'Admin';
  this.LogIn(isAdmin);
  this.router.navigate(['/home']);
} else {
          this.showSignupLink = true;
        }
      },
      error: (err) => console.error('Error fetching users:', err)
    });
  }
}

LogIn(isAdmin: boolean) {  
  this.userAuth.LogIn(isAdmin);  
  this.isUserLoggedIn = this.userAuth.iUserLoggedIn;  
}
  navigateToSignup() {
    const username = this.userregister.value.fullname;
    this.router.navigate(['/reactive'], {
      queryParams: { username: username }
    });
  }

  // Rest of your component remains unchanged
  ngOnInit(): void {
    this.isUserLoggedIn = this.userAuth.iUserLoggedIn;  
  }

  

  LogOut() {  
    this.userAuth.LogOut();  
    this.isUserLoggedIn = this.userAuth.iUserLoggedIn;  
  } 
}