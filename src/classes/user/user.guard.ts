import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStorage } from './user.store';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
	constructor (
		private user: UserStorage,
		private router: Router
	){

	}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if(this.user.isLoggedIn){
			return true;
		} else {
			return this.router.createUrlTree(['login'])
		}
	}
}
