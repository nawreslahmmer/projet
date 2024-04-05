import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GereFleuristeService {
  url: string = " http://localhost:4200/fleuriste.php";

  constructor(private http: HttpClient) { }

  getAllFleuriste() {
    return this.http.get(this.url);
  }
  createFleuriste(noveaufleuriste: any){
    return this.http.post(this.url,noveaufleuriste);
  }
  supprimeFleurist()
  {
    return this.http.delete(this.url)
  }
}

