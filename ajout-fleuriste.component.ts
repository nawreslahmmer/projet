// ajout-fleuriste.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GereFleuristeService } from '../gere-fleuriste.service';

@Component({
  selector: 'app-ajout-fleuriste',
  templateUrl: './ajout-fleuriste.component.html',
  styleUrls: ['./ajout-fleuriste.component.css'],
})
export class AjoutFleuristeComponent {
  id_fleuriste: number = 0; 
  nom: string = '';
  localisation: string = '';
  avis: number = 0;
  prix: number = 0; 
  mail: string = '';
  num_tel: string = '';
  service: string[] = [];

  fleuristeAjoute: boolean = false;

  constructor(private router: Router, private fs:GereFleuristeService) {}

  createFleuriste() {
    if (!this.nom || !this.localisation || !this.avis || !this.prix || !this.mail || !this.num_tel || !this.service) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (this.avis < 0 || this.avis > 5) {
      alert("L'avis doit être compris entre 0 et 5.");
      return;
    }

    const nouveauFleuriste = {
      id: this.id_fleuriste,
      nom: this.nom,
      lieu: this.localisation,
      avis: this.avis,
      prixMoyen: this.prix,
      email: this.mail,
      numeroTelephone: this.num_tel,
      services: this.service,
    };

    this.fs.createFleuriste(nouveauFleuriste).subscribe(
      () => {
       alert("fleuriste ajoute avec succès !");
       this.router.navigate(['/']);
      },
      (error) => {
        console.error("Erreur lors de l'ajout du fleuriste :", error);
        alert("Une erreur s'est produite lors de l'ajout du fleuriste.");
      }
    );
  }

  resetForm() {
    this.id_fleuriste = 0; 
    this.nom = '';
    this.localisation = '';
    this.avis = 0; 
    this.prix = 0; 
    this.mail = '';
    this.num_tel = '';
    this.service = [];
  }

  request() {
    console.log("Request button clicked");
  }
}
