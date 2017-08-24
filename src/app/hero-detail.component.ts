import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>ID: </label>{{hero.id}}</div>
            <div>
                <label>Name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
    `
})
export class HeroDetailComponent {
    // In following putting square brackets around the `hero` property makes it target of the a
    // property binding expression.
    //  <hero-detail [hero]="selectedHero"></hero-detail>
    // You must declare target binding property to be an input property by using @Input decorator
    @Input() hero: Hero;
}