import { NgModule } 		from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';
import { FormsModule }		from '@angular/forms';
import { HttpModule }		from '@angular/http';

//import { InMemoryWebApiModule }	from 'angular2-in-memory-web-api';
//import { InMemoryDataService }	from '../services/in-memory-data.service';

import '../rxjs-extensions';

import { AppComponent }			from '../components/app.component';
import { HeroDetailComponent }	from '../components/hero-detail.component';
import { HeroService}			from '../services/hero.service';
import { HeroesComponent }		from '../components/heroes.component';
import { routing }				from '../routes/app.routing';
import { DashboardComponent }	from '../components/dashboard.component';
import { HeroSearchComponent }	from '../components/hero-search.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		HttpModule,
//		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent,
		HeroSearchComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		HeroService
	]
})

export class AppModule {
}
