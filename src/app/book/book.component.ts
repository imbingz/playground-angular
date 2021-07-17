import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from './book';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: [ './book.component.css' ]
})
export class BookComponent implements OnInit {
	bookListFromService: Book[] = [];
	errorMsg: string = '';

	// inject BookService class here into constructor
	constructor(private bookService: BookService, private _router: Router, private _activatedRoute: ActivatedRoute) {}

	//create a method that will call getAllBooks from service and subscribe the data
	getBooks() {
		this.bookService
			.getAllBooks()
			.subscribe((books) => (this.bookListFromService = books), (error) => (this.errorMsg = <any>error));
	}

	onClick(bookId: number) {
		console.log('bookId is: ' + bookId);
		/* it works with or without */
		// this._router.navigate([ '/user-login' ]);

		/** to route book/:id */
		this._router.navigate([ 'book', bookId ]); // why not working??
	}

	// get the Book[] upon component initialization
	ngOnInit(): void {
		this.getBooks();
	}
}
