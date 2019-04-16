import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JsoncontentService } from '../../admin/content-admin/jsoncontent.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  inverse: boolean = this.cookieService.check("inverse");
  pageContent: String[];
  textContent: String[];
  semaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  horaire: String;



  constructor(private jsonContentService: JsoncontentService, private cookieService: CookieService) { }

  ngOnInit() {
    this.jsonContentService.getPageByName("footer").subscribe(page => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.horaire = this.textContent[1].slice(1, 8);
      this.checkaccess();
    });
  }

  ngAfterViewInit(){
    var footer = document.getElementById('footer-general');
    if(this.inverse){
      footer.style.filter="invert(90%)";
    }
  }

  checkaccess = function() {
    var footer = document.getElementById('footer-general');
    this.inverse = this.cookieService.check("inverse");
    if(this.inverse){
      footer.style.filter="invert(90%)"
    }
    else{footer.style.filter="";}
    setTimeout(() => {
      this.checkaccess();
    }, 100);
  };

}
