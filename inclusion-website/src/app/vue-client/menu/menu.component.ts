import { Component, OnInit, ViewChild } from "@angular/core";
import { JsoncontentService } from "../../admin/content-admin/jsoncontent.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  animationOFF: boolean = this.cookieService.check("animationOFF");
  // inverse: boolean = this.cookieService.check("inverse");
  //duré d'une photo dans le diapo
  duration = 7;

  //hauteur du diaporama
  height = 300;

  //numero de la photo en cours sur le diapo
  i = 0;
  i2 = 0;

  // zone;

  // recupération des element sur la page internet
  @ViewChild("myslideshowcontainer") slideshowcontainer;
  @ViewChild("myslideshow") slideshow;
  @ViewChild("myslideshowcontainer2") slideshowcontainer2;
  @ViewChild("myslideshow2") slideshow2;

  // Récupération Json
  private pageContent: String[];
  private textContent: String[];
  private imageContent: String[];
  private imageBandeau: String[];
  private plat: String[];
  private boisson: String[];

  constructor(
    private cookieService: CookieService,
    private jsonContentService: JsoncontentService
  ) { }

  ngOnInit() {
    this.jsonContentService.getPageByName("carte").subscribe(page => {
      this.pageContent = page;
      this.textContent = this.pageContent["text-content"];
      this.imageContent = this.pageContent["photo-content"];
      this.imageBandeau = this.pageContent["bandeau"];
      this.plat = this.textContent.slice(1, 4);
      this.boisson = this.textContent.slice(4, 7);
      this.lancementdiapo();
    });
  }

  ngAfterViewInit() {
    // lancement de la fonction permettant de verifier les modifications "accessibilité"
    this.checkaccess();
  }





  lancementdiapo() {
    if (
      this.slideshow != undefined &&
      this.slideshowcontainer != undefined &&
      this.slideshow2 != undefined &&
      this.slideshowcontainer2 != undefined
    ) {
      if (this.height > 0) {
        this.slideshowcontainer.nativeElement.style.height = this.height + "px";
        this.slideshowcontainer2.nativeElement.style.height =
          this.height + "px";
        this.setContainerStyle();
        //   this.zone = document.getElementsByClassName('menu');
        //   if (this.inverse) {
        //     this.zone[0].style.filter = "invert(90%)";
        //     this.zone[1].style.filter = "invert(90%)";
        //   }
      }
      this.play();
      this.play2();
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
      this.slideshow2.nativeElement.children[this.i2] == undefined &&
      this.animationOFF
    ) {
      setTimeout(() => {
        this.setContainerStyle();
      }, 100);
    }
    this.slideshow.nativeElement.style.background =
      "url(" + this.slideshow.nativeElement.children[this.i].src + ") center";
    this.slideshow.nativeElement.style.backgroundSize = "cover";
    this.slideshow2.nativeElement.style.background =
      "url(" + this.slideshow2.nativeElement.children[this.i2].src + ") center";
    this.slideshow2.nativeElement.style.backgroundSize = "cover";
  };





  // fonction permettant de verifier les modifications "accessibilité"
  checkaccess = function () {
    this.animationOFF = this.cookieService.check("animationOFF");
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





  play2 = function () {
    if (!this.animationOFF) {
      // application de la classe fadeOut pour appliquer la transition apparition petit à petit
      this.slideshow2.nativeElement.className = "fadeOut";
      setTimeout(() => {
        // changement du background de l'element slideshow
        this.slideshow2.nativeElement.style.background =
          "url(" +
          this.slideshow2.nativeElement.children[this.i2].src +
          ") center";
        this.slideshow2.nativeElement.style.backgroundSize = "cover";
        // on retire la class fadeOut afin de faire l'effet de transition inverse
        this.slideshow2.nativeElement.className = "";
      }, 1100);
    }
    this.i2++;
    if (this.i2 > this.slideshow2.nativeElement.childElementCount - 1) {
      this.i2 = 0;
    }

    // permet de lancer le diapo en boucle
    setTimeout(() => {
      this.play2();
    }, this.duration * 1000);
  };





  // fleches d'animations 1
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





  // fleches d'animations 2
  onNext2() {
    this.i2++;
    if (this.i2 > this.slideshow2.nativeElement.childElementCount - 1) {
      this.i2 = 0;
    }
    this.slideshow2.nativeElement.style.background =
      "url(" + this.slideshow2.nativeElement.children[this.i2].src + ") center";
    this.slideshow2.nativeElement.style.backgroundSize = "cover";
  }

  onPrev2() {
    this.i2--;
    if (this.i2 < 0) {
      this.i2 = this.slideshow2.nativeElement.childElementCount - 1;
    }
    this.slideshow2.nativeElement.style.background =
      "url(" + this.slideshow2.nativeElement.children[this.i2].src + ") center";
    this.slideshow2.nativeElement.style.backgroundSize = "cover";
  }
}
