import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/navbar/navbar';
import {Footer} from './components/footer/footer';
import {FeaturesComponent} from './components/features/features';
import {Hero} from './components/hero/hero';
import {TestimonialsComponent} from './components/testimonials/testimonials';
import {ContactComponent} from './components/contact/contact';
import { TranslateService } from '@ngx-translate/core';
import {Home} from './pages/home/home';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, FeaturesComponent, Hero, TestimonialsComponent, ContactComponent, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('TCompro');
}
