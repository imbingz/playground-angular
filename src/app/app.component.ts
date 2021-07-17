import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	// title = 'test';
	show: boolean = false;
	name: string = '';
	messageFromChild: string = '';

	// observable demo -
	//need to import it from RxJS and then need to subscribe in order to access to the data
	//using new key word to create an observable instance
	data$: Observable<number> = new Observable();
	myArr: number[] = [];
	errors: boolean = false;
	finished: boolean = false;

	// we can also use of() to convert any data into an observable
	myObservable$: Observable<number> = of(1, 3, 5);
	myObservableArr$: Observable<number[]> = of([ 1, 2 ], [ 3, 4 ], [ 5, 6 ]);

	fetchData() {
		this.data$ = new Observable((observer) => {
			setTimeout(() => {
				observer.next(11);
			}, 2000);

			setTimeout(() => {
				observer.next(12);
			}, 4000);

			setTimeout(() => {
				observer.complete();
			}, 6000);
		});

		let sub = this.data$.subscribe(
			(value) => this.myArr.push(value),
			(error) => (this.errors = true),
			() => (this.finished = true)
		);
	}

	// this method will be called when emit event happens and receive the message
	courseReg(courseName: string) {
		this.messageFromChild = courseName;
	}
}
