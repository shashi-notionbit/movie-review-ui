import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email: string;
  password: string;
  repassword: string;

  constructor(private authService: AuthService, 
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let user: User = new User();
    user.email = this.email;
    user.password = this.password;

    this.authService.registerUser(user)
      .subscribe(data => {
        this.router.navigate(['/login']);
      }, error => {
        console.error(error);
      });
    }
  }
