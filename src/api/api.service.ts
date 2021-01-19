import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    constructor(
        private http: HttpClient,
        public cookie: CookieService
    ) { }

    public getData = (route: string) => {
        return this.http.get(this.createCompleteRoute(route, environment.urlAddress), this.generateHeaders());
    }
   
    public create = (route: string, body) => {
        return this.http.post(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
    }
   
    public update = (route: string, body) => {
        return this.http.put(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
    }
   
    public delete = (route: string) => {
        return this.http.delete(this.createCompleteRoute(route, environment.urlAddress));
    }
   
    private createCompleteRoute = (route: string, envAddress: string) => {
        return `${envAddress}/${route}`;
    }
   
    private generateHeaders = () => {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 
                "X-CSRFToken": 'tcTPQJvtb7kAIpqmTZL9hyY22lRkGBU1iysaV3dhi34yidEXmgUujy73NnIlLWJI',
                'Authorization' : this.cookie.check('token')? `Token ${this.cookie.get('token')}`:'',
            })
        }
    }
  }
