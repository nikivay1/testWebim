import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/api/api.service';

@Injectable({providedIn: 'root'})
export class UserStorage {

    get isLoggedIn():boolean{
        return this._api.cookie.check('token')
    }

    constructor(
        private _api: ApiService,
    ) {}
    
    // actions
    public userLogin(username:string,password:string):Observable<boolean> {    
        return this._api
            .create('api-token-auth/',{'username':username,'password':password})
            .pipe(
                map(resp => {
                    if ('token' in resp){
                        this._api.cookie.set('token',resp['token'],32); 
                        return true
                    }
                    return false
                }
            )
        )
    }
    
    public userLogout() {    
        this._api.cookie.delete('token');
    }

}
