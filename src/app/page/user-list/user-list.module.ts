import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';


@NgModule({
	declarations: [UserListComponent],
	imports: [
		CommonModule,
		UserListRoutingModule,
		MatTableModule,	
		MatSortModule,
		MatPaginatorModule,
		MatInputModule,
		FlexLayoutModule
	]
})
export class UserListModule { }
