import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // Providers tell Angular to make a fresh instance of HeroService when it creates AppComponent.
  // The AppComponent as well as its child components can use that service to get hero data
  // In other words, here we have defined HeroService as a Provider for the AppComponent
  // providers: [HeroService]

  // Remove HeroService from providers of HeroComponent because it is promoted and now its part of
  // providers for AppComponent because this service will be needed in multiple child components of
  // AppComponent
  providers: []
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // Parameter of following constructor simultaneously defines a private property named heroService and
  // maintains it to be a HeroService injection. heroService instance should not be created via
  // `heroService = new HeroService()`
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    // Without Promise:
    // this.heroes = this.heroService.getHeroes();

    // With Promise:
    // Callback sets the component's heroes property to the array of heroes returned by the service
    this.heroService.getHeroes().then((heroes) => this.heroes = heroes)

    // Arrow function expression has shorter syntax than a function expression and it does bind
    // its on this, argument, super or new.target.
    // Format:
    //    (param1, param2,...,paramN) => { statements }
    //    (param1, param2,...,paramN) => expression
    //        Equivalent to (param1, param2,...,paramN) => { return expression; }
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
