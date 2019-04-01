import { Injectable } from '@angular/core';
import { Page } from "../Page/Page";
import { Observable, of } from "rxjs";
import { PAGES } from "./list-Pages";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getPages(): Observable<Page[]> {
    return of(PAGES);
  }
}
