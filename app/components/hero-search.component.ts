import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }	from 'rxjs/Observable';
import { Subject }		from 'rxjs/Subject';

import { HeroSearchService }	from '../services/hero-search.service';
import { Hero }					from '../model/hero';

@Component({
	selector: 'hero-search',
	templateUrl: 'app/templates/hero-search.component.html',
	styleUrls:  ['app/css/hero-search.component.css'],
	providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
	
	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();
	
	constructor(
		private heroSearchService: HeroSearchService,
		private router: Router) {}
  
	search(term: string): void {
		this.searchTerms.next(term);
	}
	
	ngOnInit(): void {
		this.heroes = this.searchTerms
			.distinctUntilChanged()   // ignore if next search term is same as previous
			.switchMap(term => term   // switch to new observable each time
				? this.heroSearchService.search(term)
				: Observable.of<Hero[]>([]))
				.catch(error => {
				console.log(error);
				return Observable.of<Hero[]>([]);
			});
	}
  
	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.hid];
		this.router.navigate(link);
	}
	
}
