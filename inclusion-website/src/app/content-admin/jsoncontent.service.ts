import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class JsoncontentService {
  url: string= "http://localhost:8000/api/pages/";

  constructor(private http: HttpClient) { }

  getPageById(name: string): Observable<String>{
    return this.http.get<String>(this.url+name);
  }
}
