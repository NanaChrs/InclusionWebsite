import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
import { HttpClientService } from '../service/httpclientservice.service';
import { User } from '../_models';
import { CookieService } from 'ngx-cookie-service';
import {formatDate } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private user: User = new User();
  private invalidLogin = false;

  constructor(private router: Router, private http: HttpClientService,
    private cookieService: CookieService) { }


  ngOnInit() {
    this.user.password = '';
    this.user.username = '';
    this.user.token = this.cookieService.get('token');
    this.http.postLogin(this.user).subscribe((e) => {
      if (e[0]) {
        this.router.navigate(['/admin']);
        let user = sessionStorage.setItem('username',e[0].toString());
        this.invalidLogin = false;
      }
  })
}


  checkLogin() {
    
    this.user.password = this.password;
    this.user.username = this.username;
    this.user.token = this.cookieService.get('token');
    console.log(Date.now()+ 50000*60*60*60)
    console.log(formatDate(Date.now()+ 50000*60*60*60, 'dd-MM-yyyy hh:mm:ss a', 'en-FR', '+0200'));
    this.http.postLogin(this.user).subscribe((e) => {
      if (e[0]) {
        this.router.navigate(['/admin']);
        let user = sessionStorage.setItem('username',e[0].toString())
        this.cookieService.set( 'token', e[1].toString(),60 );
        this.invalidLogin = false;
      }
      else {
        this.invalidLogin = true;
      };
      //console.log(e);
    }
    )
    return this.user.username;
  }

}

