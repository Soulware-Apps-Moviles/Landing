import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { HeroComponent } from './shared/hero/hero';
import { FeaturesComponent } from './shared/features/features';
import { TestimonialsComponent } from './shared/testimonials/testimonials';
import { ContactComponent } from './shared/contact/contact';
import { FooterComponent } from './shared/footer/footer';
import { PlansAndPrices } from "./shared/plans-and-prices/plans-and-prices";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    PlansAndPrices
]
})
export class AppComponent2 {
  title = 'Landing Page App 2';
}
