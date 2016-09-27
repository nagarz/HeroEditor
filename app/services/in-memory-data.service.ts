import { InMemoryDbService }	from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
		{ hid: 1, name: 'Saitama' },
		{ hid: 2, name: 'Genos' },
		{ hid: 3, name: 'Tatsumaki' },
		{ hid: 4, name: 'Fubuki' },
		{ hid: 5, name: 'Blast' },
		{ hid: 6, name: 'Silverfang' },
		{ hid: 7, name: 'Watchdog Man' },
		{ hid: 8, name: 'Metal Bat' },
    ];
    return {heroes};
  }
}
