import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Solo necesitas importar RouterLink de esta manera si estás trabajando con un componente standalone

@Component({
  selector: 'app-hero',
  standalone: true,    // Si estás usando el enfoque Standalone Components
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  imports: [RouterLink]  // Importa RouterLink solo aquí
})
export class HeroComponent {}
