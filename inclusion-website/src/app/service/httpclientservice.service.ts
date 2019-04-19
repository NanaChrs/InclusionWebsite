import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../_models";
import { Mail } from "../_models";

export class Login {
  constructor() { }
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) { }

  postLogin(user: User) {
    // console.log(Login);
    // return this.httpClient.post<Login[]>('https://dev.inclusion-restaurant.fr/api/login', user);
    return this.httpClient.post<Login[]>("http://localhost:8000/api/login", user);
  }
  postMail(mail: Mail) {
    // console.log(Login);
    // return this.httpClient.post<Login[]>("https://dev.inclusion-restaurant.fr/api/contact",mail);
    //console.log(Contact)
    return this.httpClient.post<Login[]>('http://localhost:8000/api/contact', mail);
  }
}
