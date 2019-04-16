import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  inverse: boolean = this.cookieService.check("inverse");

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.checkaccess();
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
