import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { HeroComponent } from './shared/hero/hero';
import { FeaturesComponent } from './shared/features/features';
import { TestimonialsComponent } from './shared/testimonials/testimonials';
import { ContactComponent } from './shared/contact/contact';
import { FooterComponent } from './shared/footer/footer';
import { PlansAndPrices } from "./shared/plans-and-prices/plans-and-prices";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    PlansAndPrices,
  
]
})
export class AppComponent2 {
}
