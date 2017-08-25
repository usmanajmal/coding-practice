import { Injectable } from '@angular/core';
import { Hero } from './hero';
// Import Mock Data into the Service
import { HEROES } from './mock-heroes';

@Injectable()

export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHero(id: Number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id))
    }
    /**
     * Simulate server latency with 2 seconds delay
     */
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000)
        })
    }
}