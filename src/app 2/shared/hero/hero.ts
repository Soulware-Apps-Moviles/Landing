import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Solo necesitas importar RouterLink de esta manera si estás trabajando con un componente standalone

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  imports: [ RouterLink]
})
export class HeroComponent {

}
