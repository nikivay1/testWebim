import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Pipe, PipeTransform } from "@angular/core";
import { map } from 'rxjs/operators';
import { ApiService } from 'src/api/api.service';
import { User } from 'src/classes/user/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit  {

	public displayedColumns = ['id', 'username', 'fullname', 'last_login'];
	public dataSource = new MatTableDataSource<User>();

	constructor(
		private _api: ApiService
	) { }

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.getAllUsers();
	}
	
	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	public getAllUsers = () => {
		this._api.getData('api/v1/users/')
		.subscribe(res => {
			this.dataSource.data = res as User[];
		})
	}

	public filter = (value: string) => {
		this.dataSource.filter = value.trim().toLocaleLowerCase();
	}
}
