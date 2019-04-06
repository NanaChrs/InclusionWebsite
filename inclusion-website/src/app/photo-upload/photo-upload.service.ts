import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PhotoUploadService {
  private UrlPages = "localhost:8000/api/pages/";
  constructor(private http: HttpClient) {   }

  sendReq(url: string){
    const link = url+"/dir";
    return this.http.get(url);
  }
}
