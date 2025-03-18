import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DynamicUserService } from '../../Services/dynamic-user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [HttpClientJsonpModule,RouterModule],
  providers: [DynamicUserService],

  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {
  data: any[] = [];

  constructor(private userdata: DynamicUserService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    console.log("text get all")
    this.userdata.GetAllUser().subscribe(user => this.data = user)
  }



  deleteUser(id: number) {
    this.userdata.DeleteUserById(id).subscribe({
      next: () => this.getAll(),
      error: err => console.error('Failed to delete user:', err),
      complete: () => console.log('user is deleted completed.')

    });
  }


  

}
