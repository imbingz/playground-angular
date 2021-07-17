import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-demo',
	templateUrl: './demo.component.html',
	styleUrls: [ './demo.component.css' ]
	// template: `<h4> Using in-line template and in-line styles  {{ title }}</h4>`,
	// styles: [ `h4 {color: orange;}` ]
})
export class DemoComponent implements OnInit {
	color: string = 'black';

	title: string = 'Learning Angular';
	buttonStatus: boolean = true;
	imageSrc1: string = 'assets/p5.png';
	imageSrc2: string = 'assets/p6.png';
	noOfCols: number = 2;
	noOfRows: number = 2;

	changeColor(c: string) {
		this.color = c;
	}

	colorName: string = 'red';
	fontWeight: string = 'bold';
	borderStyle: string = '1px solid blue';

	applyClass = true;
	constructor() {}

	ngOnInit(): void {}
}
