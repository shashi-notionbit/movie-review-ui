import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let user: User = new User();
    user.email = this.email;
    user.password = this.password;

    // let res:boolean = this.authService.loginUser1(user)
    this.authService.loginUser1(user)
      .subscribe(data => {
        localStorage.setItem('user', JSON.stringify({
          'email': this.email,
          'id': data.id
        }));
        localStorage.setItem('moviedDbToken', data.moviedDbToken);

        this.router.navigate(['/home']);
      }, error => {
        console.error(error);
      });
  }
}
