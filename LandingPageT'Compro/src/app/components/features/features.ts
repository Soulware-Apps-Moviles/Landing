import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-features',
  templateUrl: './features.html',
  imports: [
    MatCard,
    MatIcon,
    NgForOf
  ],
  styleUrls: ['./features.css']
})
export class FeaturesComponent {
  services = [
    { icon: 'favorite', title: 'Ejemplo', desc: 'test' },
    { icon: 'brightness_5', title: 'Ejemplo2', desc: 'test2' },
    { icon: 'healing', title: 'Ejemplo3', desc: 'test3' },
  ];
}
