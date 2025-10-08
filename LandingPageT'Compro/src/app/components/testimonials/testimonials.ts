import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
//import {MatIcon} from '@angular/material/icon-module.d';
import {NgForOf} from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    MatCard,
    //MatIcon,
    CommonModule,
    NgForOf
  ],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Camila flores',
      text: 'I find it comfortable to be able to order in advance, above all, when I am short of time.',
      image: 'assets/testimonios/ana.jpg'
    },
    {
      name: 'Thiago Quispe',
      text: 'The minimarket in which I buy always started operating with this application. It is cool to save purchase lists.',
      image: 'assets/testimonios/carlos.jpg'
    },
    {
      name: 'Andrea García',
      text: 'I love to see the country modernize from a few. Although I love going out, now I sometimes ask me to delivery.',
      image: 'assets/testimonios/maria.jpg'
    }
  ];
}
