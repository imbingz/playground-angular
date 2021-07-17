import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from 'src/app/userslist/userslist.component';

@NgModule({
	declarations: [ UsersListComponent ],
	imports: [ CommonModule ],
	// we must export userslistcomponent to make the compoent available to use outside the module
	exports: [ UsersListComponent ]
})
export class UsersListModule {}
