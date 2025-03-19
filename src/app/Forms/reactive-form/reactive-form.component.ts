import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordMatch } from '../../CrossFieldValidation/ConfirmedPassword';
import { emailexist } from '../../CrossFieldValidation/EmailExsist';
import { Router } from '@angular/router'; // Import Router
import { DynamicUserService } from '../../Services/dynamic-user.service';
import { HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientJsonpModule],
  providers: [DynamicUserService],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userregister: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private dynamicuser: DynamicUserService) {

    this.userregister = fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      age: ['', [Validators.required]],

      email: ['', [Validators.required], [emailexist(this.dynamicuser)]], // Moved async validator to the correct position

      password: ['', [Validators.required]],
      confirmedpassword: ['', [Validators.required]],

    }, { validators: [PasswordMatch()] });
  }
  get fullname() {
    return this.userregister.get('fullname')
  }
  get age() {
    return this.userregister.get('age')
  }
  get email() {
    return this.userregister.get('email')
  }

  get password() {
    return this.userregister.get('password')
  }
  get confirmedpassword() {
    return this.userregister.get('confirmedpassword')
  }

  onSubmit() {
    if (this.userregister.valid) {

      this.dynamicuser.GetAllUser().subscribe((users: any[]) => {
        // Find the highest existing ID and increment it
        const lastId = users.length > 0
          ? Math.max(...users.map(u => Number(u.id))) + 1
          : 1;


        const newuser = {
          ...this.userregister.value,
          id: String(lastId), // Convert the new ID to a string
        };

        this.dynamicuser.AddNewUser(newuser).subscribe({
          next: (response) => {
            console.log("User successfully added:", response);
            this.router.navigateByUrl("/home");
          },
          error: (err) => {
            console.error("Error adding user:", err);
          },
        });
      });
    }
  }

}
