import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  animationOFF: boolean = this.cookieService.check('animationOFF');
  taillePolice = 1;
  
  //duré d'une photo dans le diapo
  duration = 4;

  //hauteur du diaporama
  height = 625;

  i = 0;
  
  // recupération des element sur la page internet
  @ViewChild('myslideshowcontainer') slideshowcontainer;
  @ViewChild('myslideshow') slideshow;
  text;


  constructor( private cookieService: CookieService) {  
  }

  ngOnInit() {
    if ((this.height)>0){
      this.setContainerStyle();
    }
    this.text = document.getElementsByClassName("texttt")
    console.log('texte', this.text);  

  }

  ngAfterViewInit(){
    this.play();
    // this.checkanim();

  }

  
  
  checkanim = function(){  
    console.log('testboucle');  
    setTimeout(() => {
      this.checkanim();
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


  //Boutons activation animations  
  offAnnim(){
    this.animationOFF=true;
    this.cookieService.set('animationOFF','');
  }
  
  onAnnim(){
    this.animationOFF=false;
    this.cookieService.delete( 'animationOFF');
  }


  //Boutons modification taille text
  onDownFontsize(){
    if(this.taillePolice>1){
      this.taillePolice-=0.1;
      
    }
    this.text[0].style.fontSize= (this.taillePolice).toFixed(2)+'em'
    console.log('taille police', this.text[0].style.fontSize);  
    
    // console.log('taillepolice', (this.taillePolice).toFixed(2));
    // this.cookieService.set('taillePolice', '1');
  }

  onUpFontsize(){
    if(this.taillePolice<3){
      this.taillePolice+=0.1;

    }
    this.text[0].style.fontSize= (this.taillePolice).toFixed(2)+'em';
    console.log('taille police', this.text[0].style.fontSize);  
    // console.log('taillepolice', (this.taillePolice).toFixed(2));
    // this.cookieService.set('taillePolice','1');
  }

}
