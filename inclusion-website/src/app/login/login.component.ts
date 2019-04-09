import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { HttpClientService } from '../service/httpclientservice.service';
import { User } from '../_models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private user: User = new User();
  private invalidLogin = false

  constructor(private router: Router, private http: HttpClientService,
    private loginservice: AuthentificationService) { }


  ngOnInit() {
  }

  checkLogin() {
    this.user.password = this.password;
    this.user.username = this.username;
    this.http.postLogin(this.user).subscribe((e) => {
      if (e) {
        this.router.navigate(['/admin']);
        sessionStorage.setItem('username', this.user.username);
        this.invalidLogin = false;
      }
      else {
        this.invalidLogin = true;
      };
      console.log(e);
    }
    )

  }

}

