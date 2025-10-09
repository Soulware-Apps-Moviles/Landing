import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { HeroComponent } from './shared/hero/hero';
import { FeaturesComponent } from './shared/features/features';
import { TestimonialsComponent } from './shared/testimonials/testimonials';
import { ContactComponent } from './shared/contact/contact';
import { FooterComponent } from './shared/footer/footer';

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
    
]
})
export class AppComponent {
  title = 'Landing Page App';
}
