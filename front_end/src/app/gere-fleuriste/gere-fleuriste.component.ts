import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GereFleuristeService } from '../gere-fleuriste.service';
import { response } from 'express';
import { error } from 'console';

@NgModule({
  declarations: [
    GereFleuristeComponent
  ],
  imports: [
    CommonModule 
  ],
  providers: [],
 
})
@Component({
  selector: 'app-gere-fleuriste',
  standalone: true,
  imports: [],
  templateUrl: './gere-fleuriste.component.html',
  styleUrl: './gere-fleuriste.component.css'
})

export class GereFleuristeComponent implements OnInit {
  constructor(public fs: GereFleuristeService) { }

  fleurists: any = [];

  ngOnInit() {
    this.fs.getAllFleuriste().subscribe(
      (response) => {
        this.fleurists = response;
      },
      (error) => {
        console.error("Erreur lors de la récupération de données:", error);
        alert("Une erreur s'est produite lors de la récupération des données");
      }
    );
  }
}
supprimeFleurist(id)

{
  this.fs.supprimeFleurist().subscribe(
    () => {
      console.log('Fleuriste supprimé avec succès');
    },
    (error) => {
      console.error("Erreur lors de la suppression du fleuriste:", error);
      alert("Une erreur s'est produite lors de la suppression du fleuriste");
    }
  );
}

 
