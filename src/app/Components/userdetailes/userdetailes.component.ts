import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DynamicUserService } from '../../Services/dynamic-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetailes',
  standalone: true,
  imports: [HttpClientJsonpModule],
  providers:[DynamicUserService],
  templateUrl: './userdetailes.component.html',
  styleUrl: './userdetailes.component.css'
})
export class UserdetailesComponent implements OnInit {
  ID: number = 0;
  user:any
  constructor(private userdtailes:DynamicUserService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.getID()
    this.getUserByID()

  }

  getID() {
    this.ID = Number(this.route.snapshot.paramMap.get("id"))
  }
  
  getUserByID() {
    this.userdtailes.GetUserById(this.ID).subscribe({
      next: (u) => this.user = u,
      error: (err) => console.error('Error fetching data:', err),
      complete: () => console.log('Data fetching completed.')
    });
  }

}
