import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  //The hero property must be an Input property, 
  //annotated with the @Input() decorator, because the external HeroesComponent binds to it like this.
  //<app-hero-detail [hero]="selectedHero"></app-hero-detail>
  @Input() hero?: Hero;
}
