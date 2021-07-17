import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: [ './user-login.component.css' ]
})
export class UserLoginComponent implements OnInit {
	errorMessage: string = '';
	successMessage: string = '';
	userName: string = '';
	password: string = '';
	constructor() {}

	ngOnInit(): void {
		console.log('inside child component: user-login');
	}

	verify() {
		if (this.userName == 'admin' && this.password == 'admin123') {
			this.successMessage = 'User logged in successfully';
		} else {
			this.errorMessage = 'User authentication failed';
		}
		console.log('User Name:', this.userName);
		console.log('Password:', this.password);
	}
}
