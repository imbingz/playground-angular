import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: [ './product-details.component.css' ]
})
export class ProductDetailsComponent implements OnInit, OnChanges {
	constructor() {}
	// use @Input() decorator indicating to receive data info from parent compo
	@Input() SalesRating: number = 3.5;

	//declare @Output property and EventEmitter
	@Output() GetLocalSales: EventEmitter<string> = new EventEmitter<string>();

	//this property will be used to render in child.component.html {{}}
	_salesRating: String = 'Default';

	ngOnInit(): void {}

	// use ngOnChange hook to perform logic and set the value that is to be displayed in the parent compo
	ngOnChanges(): void {
		console.log(this.SalesRating);

		if (this.SalesRating == 3.5) {
			this._salesRating = 'Good';
		} else if (this.SalesRating == 4.0) {
			this._salesRating = 'Very Good';
		} else if (this.SalesRating == 4.5) {
			this._salesRating = 'Excellent';
		} else {
			this._salesRating = 'Undefined';
		}
	}

	// onClick() for button click event
	onClick(): void {
		this.GetLocalSales.emit(`The local sales report 
    for this product is ${this._salesRating}`);
	}
}
