import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  //duré d'une photo dans le diapo
  duration = 10;
  i = 0;
  //hauteur du diaporama
  height = 650;
  
  
  //recupération des element slideshowcontainer et slideshow
  @ViewChild('myslideshowcontainer') slideshowcontainer;
  @ViewChild('myslideshow') slideshow;
  

  execute = function(){

    //on applique la hauteur au diapo et on le lance
    if ((this.height)>0){
      this.setContainerStyle();
      this.play();
    }
  }
 

  // fonction pour appliquer la hauteur du dipoa et la position relative
  setContainerStyle = function(){
    this.slideshowcontainer.nativeElement.style.position = 'relative';
    this.slideshowcontainer.nativeElement.style.height = this.height + 'px';
  }


  play = function(){
    // application de la classe fadeOut pour application la transition apparition petit à petit
    this.slideshow.nativeElement.className = 'fadeOut';


    setTimeout(() => {
      // changement du background de l'element slideshow
      this.slideshow.nativeElement.style.background =  'url('+this.slideshow.nativeElement.children[this.i].src+') center';
      this.slideshow.nativeElement.style.backgroundSize = 'cover';
      // on retire la class fadeOut afin de faire l'effet de transition inverse
      this.slideshow.nativeElement.className = '';
    }, 2000);


    // on incremente i afin de changer la photo qui sera affichée dans le slideshow
    this.i++;
    //quand on arrive à la derniere diapo, on retourne à la premiere
    if(this.i==this.slideshow.nativeElement.childElementCount)
    {
      this.i=0;
    }


    // fonction qui permet de lancer le diapo en boucle 
    setTimeout(() => {
      this.play();
    }, this.duration*1000);
  }


  constructor() { }


  ngOnInit() {
    this.execute();
  }

}
