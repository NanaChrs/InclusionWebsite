import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  alt : "photo d'identité de ";
  public content = [
    {
    nom: "Jules",
    fonction :"Gitkraken destructeur",
  },
{ 
  nom:"Clément",
  fonction:"Json pro user"
},
{ 
  nom:"Mathilde",
  fonction:"La meuf fatiguée"
},
{ 
  nom:"Thibaut",
  fonction:"Le mec du css"
},
{ 
  nom:"Maxime",
  fonction:"Mec cool"
},
{ 
  nom:"Lisa",
  fonction:"Meuf cool"
}]


}
