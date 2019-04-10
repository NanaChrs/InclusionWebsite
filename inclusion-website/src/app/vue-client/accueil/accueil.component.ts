import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  animationOFF: boolean = this.cookieService.check('animationOFF');

  //duré d'une photo dans le diapo
  duration = 10;

  //hauteur du diaporama
  height = 625;

  //numero de la photo en cours sur le diapo
  i = 0;
  
  // recupération des element sur la page internet
  @ViewChild('myslideshowcontainer') slideshowcontainer;
  @ViewChild('myslideshow') slideshow;


  constructor( private cookieService: CookieService) {  
  }

  ngOnInit() {
    // application de la hauteur du dipoa et la position relative
    if ((this.height)>0){
      this.setContainerStyle();
    }
  }


  ngAfterViewInit(){
    // lancement du diapo
    this.play();
    // lancement de la fonction permettant de verifier les modifications "accessibilité"
    this.checkaccess();
  }

  // fonction permettant de verifier les modifications "accessibilité"
  checkaccess = function(){ 
    this.animationOFF = this.cookieService.check('animationOFF');
    setTimeout(() => {
      this.checkaccess();
    }, 100);
  }


  // fonction pour appliquer la hauteur du dipoa et la position relative
  setContainerStyle = function(){
    this.slideshowcontainer.nativeElement.style.height = this.height + 'px';
    this.slideshow.nativeElement.style.background =  'url('+this.slideshow.nativeElement.children[this.i].src+') center';
    this.slideshow.nativeElement.style.backgroundSize = 'cover';
  }

  
  play = function(){
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


  // fleches d'animations 
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

}
