import { Component } from '@angular/core';

@Component({
	selector: 'app-users-list',
	templateUrl: './userslist.component.html'
})
export class UsersListComponent {
	testUser = [ 'Jack', 'Sam', 'Meggi' ];

	users = [
		{
			id: '1',
			name: 'Jack',
			age: 21
		},
		{
			id: '2',
			name: 'Jane',
			age: 22
		},
		{
			id: '3',
			name: 'Sam',
			age: 23
		}
	];

	removeUser(id: string): void {
		this.users = this.users.filter((user) => user.id !== id);
	}
}
