import { Component, OnInit, ViewChild } from "@angular/core";
import { JsoncontentService } from "../../admin/content-admin/jsoncontent.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-equipe",
  templateUrl: "./equipe.component.html",
  styleUrls: ["./equipe.component.css"]
})
export class EquipeComponent implements OnInit {
  animationOFF: boolean = this.cookieService.check("animationOFF");
  cookieinverse: boolean = this.cookieService.check("inverse");

  //duré d'une photo dans le diapo
  duration = 7;

  //hauteur du diaporama
  height = 625;

  //numero de la photo en cours sur le diapo
  i = 0;
  pageContent: String[];
  textContent: String[];
  imageContent: String[];
  equipe: String[][];
  descriptionGlobale: String;
  descriptions: String[];
  nousRejoindre: String[];
  nom: String;

  img;


  // recupération des element sur la page internet
  @ViewChild("myslideshowcontainer") slideshowcontainer;
  @ViewChild("myslideshow") slideshow;

  constructor(
    private cookieService: CookieService,
    private jsonContentService: JsoncontentService
  ) { }

  ngOnInit() {
    this.jsonContentService.getPageByName("equipe").subscribe(page => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.descriptionGlobale = this.textContent[0];
      this.imageContent = this.pageContent["photo-content"];
      this.descriptions = this.textContent;
      this.descriptions.splice(0, 1);
      this.nousRejoindre = this.descriptions.splice(
        this.descriptions.length - 1,
        1
      );
      this.lancementdiapo();
    });
  }

  ngAfterViewInit() {
    // lancement de la fonction permettant de verifier les modifications "accessibilité"
    this.checkaccess();
  }




  lancementdiapo() {
    if (this.slideshow != undefined && this.slideshowcontainer != undefined) {
      if (this.height > 0) {
        this.slideshowcontainer.nativeElement.style.height = this.height + "px";
        this.setContainerStyle();
      }
      this.play();
    } else {
      setTimeout(() => {
        this.lancementdiapo();
      }, 100);
    }
  }






  // fonction pour appliquer la hauteur du dipoa et la position relative
  setContainerStyle = function () {
    if (
      this.slideshow.nativeElement.children[this.i] == undefined &&
      this.animationOFF
    ) {
      setTimeout(() => {
        this.setContainerStyle();
      }, 100);
    }
    this.slideshow.nativeElement.style.background =
      "url(" + this.slideshow.nativeElement.children[this.i].src + ") center";
    this.slideshow.nativeElement.style.backgroundSize = "cover";
  };





  // fonction permettant de verifier les modifications "accessibilité"
  checkaccess = function () {
    this.animationOFF = this.cookieService.check("animationOFF");
    this.cookieinverse = this.cookieService.check("inverse");
    if (this.cookieinverse) {
      this.img = document.getElementsByClassName('photo');
      for (var i = 0; i < this.img.length; i++) {
        this.img[i].style.filter = "invert(90%)";
      }
    }
    setTimeout(() => {
      this.checkaccess();
    }, 100);
  };





  play = function () {
    if (!this.animationOFF) {
      // application de la classe fadeOut pour appliquer la transition apparition petit à petit
      this.slideshow.nativeElement.className = "fadeOut";
      setTimeout(() => {
        // changement du background de l'element slideshow
        this.slideshow.nativeElement.style.background =
          "url(" +
          this.slideshow.nativeElement.children[this.i].src +
          ") center";
        this.slideshow.nativeElement.style.backgroundSize = "cover";
        // on retire la class fadeOut afin de faire l'effet de transition inverse
        this.slideshow.nativeElement.className = "";
      }, 1100);
    }

    this.i++;
    if (this.i > this.slideshow.nativeElement.childElementCount - 1) {
      this.i = 0;
    }

    // permet de lancer le diapo en boucle
    setTimeout(() => {
      this.play();
    }, this.duration * 1000);
  };





  // fleches d'animations
  onNext() {
    this.i++;
    if (this.i > this.slideshow.nativeElement.childElementCount - 1) {
      this.i = 0;
    }
    this.slideshow.nativeElement.style.background =
      "url(" + this.slideshow.nativeElement.children[this.i].src + ") center";
    this.slideshow.nativeElement.style.backgroundSize = "cover";
  }

  onPrev() {
    this.i--;
    if (this.i < 0) {
      this.i = this.slideshow.nativeElement.childElementCount - 1;
    }
    this.slideshow.nativeElement.style.background =
      "url(" + this.slideshow.nativeElement.children[this.i].src + ") center";
    this.slideshow.nativeElement.style.backgroundSize = "cover";
  }
}
