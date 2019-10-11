import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;  

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.loggedIn();
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
}
