import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url:string= "http://localhost:8080/Api/Channels";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Array<String>>(this.url);
  }
  
}
