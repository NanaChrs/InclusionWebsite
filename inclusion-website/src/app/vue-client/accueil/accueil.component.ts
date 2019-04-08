import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  
  animationOFF: boolean = this.cookieService.check('animationOFF');

  // const cookieExists: boolean = cookieService.check('animation');
  i = 0;
  
  //duré d'une photo dans le diapo
  duration = 4;

  //hauteur du diaporama
  height = 625;
  
  //recupération des element slideshowcontainer et slideshow
  @ViewChild('myslideshowcontainer') slideshowcontainer;
  @ViewChild('myslideshow') slideshow;
  

  // fonction pour appliquer la hauteur du dipoa et la position relative
  setContainerStyle = function(){
    this.slideshowcontainer.nativeElement.style.height = this.height + 'px';
    this.slideshow.nativeElement.style.background =  'url('+this.slideshow.nativeElement.children[this.i].src+') center';
    this.slideshow.nativeElement.style.backgroundSize = 'cover';
  }

  
  play = function(){
    this.animationOFF = this.cookieService.check('animationOFF');
    if (!this.animationOFF){ 
      // application de la classe fadeOut pour appliquer la transition apparition petit à petit
      this.slideshow.nativeElement.className = 'fadeOut';
      setTimeout(() => {
        // changement du background de l'element slideshow
        this.slideshow.nativeElement.style.background =  'url('+this.slideshow.nativeElement.children[this.i].src+') center';
        this.slideshow.nativeElement.style.backgroundSize = 'cover';
        // on retire la class fadeOut afin de faire l'effet de transition inverse
        this.slideshow.nativeElement.className = '';
      }, 1100);
    }

    this.i++;
    if(this.i>this.slideshow.nativeElement.childElementCount-1){ this.i=0; }
    
    // permet de lancer le diapo en boucle
    setTimeout(() => {
      this.play();
    }, this.duration*1000);
  }


  //fleches d'animations 
  onNext(){
    this.i++;
    if(this.i>this.slideshow.nativeElement.childElementCount-1){ this.i=0; }
    this.slideshow.nativeElement.style.background =  'url('+this.slideshow.nativeElement.children[this.i].src+') center';
    this.slideshow.nativeElement.style.backgroundSize = 'cover';
  }

  onPrev(){
    this.i--;
    if(this.i<0){ this.i=this.slideshow.nativeElement.childElementCount-1; }
    this.slideshow.nativeElement.style.background =  'url('+this.slideshow.nativeElement.children[this.i].src+') center';
    this.slideshow.nativeElement.style.backgroundSize = 'cover';
  }


  //Boutons activation animations
  onAnnim(){
    this.animationOFF=false;
    this.cookieService.delete( 'animationOFF');

  }

  offAnnim(){
    this.animationOFF=true;
    this.cookieService.set('animationOFF','');

  }

  constructor(private cookieService: CookieService) {  
  }

  ngOnInit() {
    if ((this.height)>0){
      this.setContainerStyle();
    }
    this.play();
  }

}



