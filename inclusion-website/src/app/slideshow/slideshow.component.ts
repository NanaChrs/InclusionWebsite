import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { config } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  duration = 10;
  i = 0;
  height = 200;
  @ViewChild('myslideshowcontainer') slideshowcontainer;
  @ViewChild('myslideshow') slideshow;
  
  execute = function(){

    if ((this.height)>0){
      this.setContainerStyle();
      this.play();
    }
    
  }
 
  setContainerStyle = function(){
    this.slideshowcontainer.nativeElement.style.position = 'relative';
    this.slideshowcontainer.nativeElement.style.width = '100%';
    this.slideshowcontainer.nativeElement.style.height = this.height + 'px';
  }


  play = function(){
    this.slideshow.nativeElement.className = 'fadeOut';
    setTimeout(() => {
      this.slideshow.nativeElement.style.background =  'url('+this.slideshow.nativeElement.children[this.i].src+') center';
      this.slideshow.nativeElement.style.backgroundSize = 'cover';
      this.slideshow.nativeElement.className = '';
    }, 1000);


    console.log('test', this.slideshow);
    console.log('test', this.slideshow.nativeElement.className);

    
    this.i++;
    if(this.i==this.slideshow.nativeElement.childElementCount)
    {
      this.i=0;
    }


    setTimeout(() => {
      this.play();
    }, this.duration*1000);
  }


  constructor() { }


  ngOnInit() {
    this.execute();
  }

}


