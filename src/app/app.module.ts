import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module'

// Imports for loading & configuring the in-memory Web API
// This is to simulate communication with a remote-server by
// adding the InMemoryWebApiModule to the module imports instead
// of the need for a real API server. This effectively replaces
// the Http client's XHR backend service with an in-memory alternative
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroService }          from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent, // this will help Angular know <my-heroes> tags
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

