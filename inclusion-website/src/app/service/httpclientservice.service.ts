import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';

export class Login{
  constructor(
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     postLogin(user: User){
    console.log(Login);
    return this.httpClient.post<Login[]>('http://localhost:8000/api/login',user);
  }

}