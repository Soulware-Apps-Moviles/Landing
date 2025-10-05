import { Component } from '@angular/core';
import {Hero} from '../../components/hero/hero';
import {FeaturesComponent} from '../../components/features/features';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    FeaturesComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

export class HomeComponent {
}
