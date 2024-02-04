import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let tasks = [
			{
				id: 1,
				text: 'Tarea 1 ',
				start_date: '2023-04-15 00:00',
				duration: 3,
				progress: 0.6,
			},
			{
				id: 2,
				text: 'Tarea 2',
				start_date: '2023-04-18 00:00',
				duration: 3,
				progress: 0.4,
			},
		];
		let links = [{ id: 1, source: 1, target: 2, type: '0' }];
		return { tasks, links };
	}
}
