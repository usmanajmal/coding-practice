import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service'
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    // In following putting square brackets around the `hero` property makes it target of the a
    // property binding expression.
    //  <hero-detail [hero]="selectedHero"></hero-detail>
    // You must declare target binding property to be an input property by using @Input decorator
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        // Extract id parameter value from the ActivatedRoute service and use the HeroService
        // to fetch the hero with that id.
        // SwitchMap operator maps the id in the Observable route parameters to a new Observable, the
        // result of the HeroService.getHero() method
        // The hero id is a number. Route params are always strings. So the route param value is
        // converted to a number with the JavaScript + operator
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);

    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}