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
    { icon: 'favorite', title: 'Fill your shopping bag', desc: 'Choose the products of your favorite brands to prepare your order. Choose details about how you want to make your order, such as the delivery and payment modality.' },
    { icon: 'brightness_5', title: 'Discover Local Businesses', desc: 'Get a vision of business near you that can attend your purchase. Compare offers, delivery time and choose the best option for you.' },
    { icon: 'healing', title: 'Enjoy your order', desc: 'Wait for your delivery or collect in store when your order is ready to carry.' },
  ];
}

export class Features {
}
