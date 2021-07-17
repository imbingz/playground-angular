import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListModule } from './userslist/userslist.module';
import { DemoComponent } from './demo/demo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { UsersComponent } from './users/users.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
	//for components
	declarations: [
		AppComponent,
		DemoComponent,
		ProductDetailsComponent,
		ProductsComponent,
		CoursesListComponent,
		UsersComponent,
		UserLoginComponent,
		BookComponent,
  LoansComponent,
  LoanTypesComponent,
  AddLoansComponent,
  BookDetailsComponent,
  BookEditComponent
	],
	//for modules
	imports: [ BrowserModule, AppRoutingModule, UsersListModule, NgbModule, FormsModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
