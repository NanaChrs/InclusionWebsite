import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientService, Login } from '../service/httpclientservice.service';
import { User } from '../_models';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private cookieService: CookieService,private http: HttpClientService) { }


  isUserLoggedIn() {
    
    let user = sessionStorage.getItem('username')
    return (user);
  }
  

  logOut() {
    sessionStorage.removeItem('username')
    this.cookieService.delete('token');
  }
}