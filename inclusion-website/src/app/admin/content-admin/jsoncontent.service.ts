import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JsoncontentService {

  // private urlPages: string = "https://dev.inclusion-restaurant.fr/api/pages/";
  private urlPages: string = "http://localhost:8000/api/pages/";

  constructor(private http: HttpClient) { }

  getPageByName(name: string): Observable<String> {
    const url = this.urlPages + name;
    return this.http.get<String>(url);
  }

  deletePageById(link: string) {
    const url = `${this.urlPages}${link}`;
    return this.http.delete(url);
  }


}
