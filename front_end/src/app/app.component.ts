import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GereFleuristeComponent } from './gere-fleuriste/gere-fleuriste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GereFleuristeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gere_fleuriste';
}
