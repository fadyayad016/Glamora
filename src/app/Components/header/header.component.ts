import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { UserAuthenticationService } from '../../Services/user-authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showNav: boolean = true;
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private userAuthService: UserAuthenticationService
  ) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNav = event.url !== '/';
      }
    });

    this.userAuthService.getIsAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }
}