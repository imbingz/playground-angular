import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book/book';
// import { Book } from '../assets/book';
import { retry } from 'rxjs/operators';

// this allows other components to inject dependencies to the service class
@Injectable({
	//this will not be needed if we add the service to provider inside app.module
	providedIn: 'root'
})
export class BookService {
	// the Service postfix is automatically added
	private booksUrl = '../assets/book.json';

	// private booksUrl = 'http://localhost:3000/books';
	constructor(private http: HttpClient) {}

	// use HttpClient instance to call get method, which returns an observable by default
	getAllBooks(): Observable<Book[]> {
		// errors can be mitigated by using the retry function of RxJS library. retry(3) means trying to reconnect to url 3 times
		return this.http.get<Book[]>(this.booksUrl).pipe(retry(3));
	}

	// hard coded book[] using Book class inside assets folder
	// getAllBooks(): Book[] {
	// 	// Returns an Array of  types
	// 	return [
	// 		new Book(1, 'HTML 5'),
	// 		new Book(2, 'CSS 3'),
	// 		new Book(3, 'Java Script'),
	// 		new Book(4, 'Ajax Programming')
	// 	];
	// }
}
