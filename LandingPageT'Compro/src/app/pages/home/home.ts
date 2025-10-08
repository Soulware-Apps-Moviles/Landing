import { Component } from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {FeaturesComponent} from '../../components/features/features';
import {ContactComponent} from '../../components/contact/contact';
import {Footer} from '../../components/footer/footer';
import {Navbar} from '../../components/navbar/navbar';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TestimonialsComponent} from '../../components/testimonials/testimonials';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageSwitcher} from '../../components/language-switcher/language-switcher';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    FeaturesComponent,
    ContactComponent,
    Footer,
    Navbar,
    RouterOutlet,
    TestimonialsComponent,
    TranslatePipe,
    LanguageSwitcher,
    RouterLink,
    RouterLinkActive,
    MatButton
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  options: any;

}

export class HomeComponent {
}
