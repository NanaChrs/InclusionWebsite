import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
   private urlPages: string= "http://localhost:8000/api/pages";

   cronstructor(private http: HttpClient){}
   getPageByName(name: string): Observable<String>{
     const url = 
   }
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    //msg : require('D:/Inclusion/InclusionWebsite/inclusion_node/crypto.js'),
    
  });
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  
}
var app=require('express')(),
    server=require('http').createServer(app),
    io=require('socket.io').listen(server),
    fs=require('fs'),
    ent=require('ent');
  app.get('/', function (req, res) {
    fs.readFile("D:/Inclusion/InclusionWebsite/inclusion_node/crypto.js", function (error, pgResp) {
        if (error) {
            res.writeHead(404);
            res.write('Contents you are looking are not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgResp);   
        }    
        res.end();
    });
});