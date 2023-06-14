import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  //safeloading property selected here using ?
  selectedHero?: Hero;

  heroes: Hero[] = [];

  //The parameter simultaneously defines a private 
  //heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  //Reserve the constructor for minimal initialization 
  //such as wiring constructor parameters to properties. The constructor shouldn't do anything. 

  ngOnInit(): void {
    this.getHeroes();
  }
  

  //safeloading property selected here using ?
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  //The previous version assigns an array of heroes to the component's 
  //heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
  
  
}