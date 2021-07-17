import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: [ './products.component.css' ]
})
export class ProductsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	messageFromNestedComponent: string = '';

	onGetLocalSalesReport(message: string): void {
		this.messageFromNestedComponent = 'Product Details Report: ' + message;
	}

	products: any[] = [
		{
			ProductID: 1,
			ProductName: 'Solid State Drive',
			CategoryId: 100,
			AvilableQty: 50,
			ReorderQty: 30,
			SalesRating: 4.5
		},
		{
			ProductID: 2,
			ProductName: 'Monitor',
			CategoryId: 101,
			AvilableQty: 20,
			ReorderQty: 10,
			SalesRating: 4
		},
		{
			ProductID: 3,
			ProductName: 'LED Display Monitor',
			CategoryId: 100,
			AvilableQty: 5,
			ReorderQty: 10,
			SalesRating: 3.5
		},
		{
			ProductID: 4,
			ProductName: 'San Disk 64 GB Pen Drive',
			CategoryId: 105,
			AvilableQty: 35,
			ReorderQty: 80,
			SalesRating: 4
		},
		{
			ProductID: 5,
			ProductName: 'Think Pad Ultra Dock',
			CategoryId: 105,
			AvilableQty: 25,
			ReorderQty: 20,
			SalesRating: 4.5
		}
	];
}
