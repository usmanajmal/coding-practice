import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// Import Mock Data into the Service
import { HEROES } from './mock-heroes';

@Injectable()

export class HeroService {
    // [Deprecated] Uncomment following to get heroes from mock
    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(HEROES);
    // }
    private heroesUrl = 'api/heroes';
    // For Update Hero details
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error("Error Occurred", error);
        return Promise.reject(error.message || error);
    }
    // [Deprecated] Uncomment following if you like to use mock
    // Following does take all Heroes even though one hero was
    // requested. In revised version of this method below we
    // get only the Hero required via specification of its id
    // getHero(id: Number): Promise<Hero> {
    //     return this.getHeroes()
    //         .then(heroes => heroes.find(hero => hero.id === id))
    // }
    getHero(id: Number): Promise<Hero> {
        const URL = `${this.heroesUrl}/${id}`;
        return this.http.get(URL)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }
    /**
     * Simulate server latency with 2 seconds delay
     */
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000)
        })
    }

    update(hero: Hero): Promise<Hero> {
        const URL = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(URL, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
          .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
          .toPromise()
          .then(res => res.json().data as Hero)
          .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
      }
}