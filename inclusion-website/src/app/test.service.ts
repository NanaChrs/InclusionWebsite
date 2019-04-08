import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url: string = "https://dev.inclusion-restaurant.fr/Api/Channels";
  /*Sert a rien */

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<String>>(this.url);
  }

}
