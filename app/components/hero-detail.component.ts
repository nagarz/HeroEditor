import { Component, Input, OnInit }			from '@angular/core';
import { ActivatedRoute, Params }	from '@angular/router';

import { HeroService }	from '../services/hero.service';
import { Hero }			from '../model/hero';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/templates/hero-detail.component.html',
	styleUrls: ['app/css/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

	 @Input() hero: Hero;
	 
	 constructor(private heroService: HeroService, private route: ActivatedRoute) {
	 }
	 
	 ngOnInit(): void {
	 	this.route.params.forEach((params: Params) => {
	 		let hid = +params['hid'];
	 		this.heroService.getHero(hid).then(hero => this.hero = hero);
	 	});
	 }
	 
	 goBack(): void {
	 	window.history.back();
	 }
	 
	 save(): void {
	 	this.heroService.update(this.hero).then(this.goBack);
	 }
	 
}