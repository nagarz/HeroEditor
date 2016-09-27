import { Injectable } 	from '@angular/core';
import { Headers, Http }			from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } 	from '../model/hero';

@Injectable()
export class HeroService {

	//private getHeroesUrl = 'app/heroes';
	private headers = new Headers({'Content-Type': 'application/json'});
	private createHeroUrl = 'http://localhost:3333/api/create-hero';
	private getHeroesUrl = 'http://localhost:3333/api/heroes';
	private updateHeroUrl = 'http://localhost:3333/api/update-hero';
	private deleteHeroUrl = 'http://localhost:3333/api/delete-hero';
	
	constructor(private http: Http) {
	}

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.getHeroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
	}
	
	getHeroesSlowly(): Promise<Hero[]> {
 		return new Promise<Hero[]>(resolve =>
		setTimeout(resolve, 2000)) // delay 2 seconds
		.then(() => this.getHeroes());
	}
	
	getHero(hid: number): Promise<Hero> {
		return this.getHeroes().then(heroes => heroes.find(hero => hero.hid === hid));
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
  		return Promise.reject(error.message || error);
	}
	
	update(hero: Hero): Promise<Hero> {
		const url = `${this.updateHeroUrl}/${hero.hid}`;
		return this.http.put(url, JSON.stringify(hero), {headers: this.headers}).toPromise().then(() => hero).catch(this.handleError);
	}
	
	create(name: string): Promise<Hero> {
		return this.http
			.post(this.createHeroUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}
	
	delete(hid: number): Promise<void> {
		let url = `${this.deleteHeroUrl}/${hid}`;
		console.log(url);
		return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
	}
	
}