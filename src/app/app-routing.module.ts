import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookComponent } from './book/book.component';
import { DemoComponent } from './demo/demo.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';
import { ProductsComponent } from './products/products.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
	{ path: 'loans', component: LoansComponent },
	{ path: 'loan-types', component: LoanTypesComponent },
	{ path: 'loans/add-loan', component: AddLoansComponent },
	{ path: 'user-login', component: UserLoginComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'book', component: BookComponent },
	{ path: 'demo', component: DemoComponent },
	// { path: '', redirectTo: '/user-login', pathMatch: 'full' },
	{ path: 'book/:id', component: BookEditComponent },
	{ path: '**', redirectTo: 'book', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
