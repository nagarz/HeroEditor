import { InMemoryDbService }	from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
		{ id: 1, name: 'Saitama' },
		{ id: 2, name: 'Genos' },
		{ id: 3, name: 'Tatsumaki' },
		{ id: 4, name: 'Fubuki' },
		{ id: 5, name: 'Blast' },
		{ id: 6, name: 'Silverfang' },
		{ id: 7, name: 'Watchdog Man' },
		{ id: 8, name: 'Metal Bat' },
    ];
    return {heroes};
  }
}
