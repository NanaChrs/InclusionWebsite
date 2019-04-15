import { Component, OnInit } from '@angular/core';
import { Mail } from '../../_models';
import { HttpClientService } from '../../service/httpclientservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private name: string;
  private sender: string;
  private object: string;
  private message: string;
  private mail: Mail = new Mail();
  constructor(private http: HttpClientService, ) { }

  ngOnInit() {
  }


  sendMail() {

    this.mail.name = this.name;
    console.log(this.mail.name)
    this.mail.sender = this.sender;
    this.mail.object = this.object;
    this.mail.message = this.message;
    console.log(this.mail)
    this.http.postMail(this.mail).subscribe((e) => {
      if (e[0]) {
        return true;
      }
      return false;
    })
  }

}