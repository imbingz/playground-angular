import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-courses-list',
	templateUrl: './courses-list.component.html',
	styleUrls: [ './courses-list.component.css' ]
})
export class CoursesListComponent implements OnInit {
	constructor() {}

	courses = [
		{ courseId: 1, courseName: 'Node JS' },
		{ courseId: 2, courseName: 'Typescript' },
		{ courseId: 3, courseName: 'Angular' },
		{ courseId: 4, courseName: 'React JS' }
	];
	course: any[] = [];

	// this will get the data from parent app.compo
	@Input() cName: string = '';

	// create an eventemitter instance to emit event and send back to parent
	@Output() onRegister: EventEmitter<string> = new EventEmitter<string>();

	//make a eventlistener method when button clicked and emit the data
	register(courseName: string): void {
		this.onRegister.emit('You successfully registered the course: ' + courseName);
	}

	// OnInit
	ngOnInit(): void {}
}
