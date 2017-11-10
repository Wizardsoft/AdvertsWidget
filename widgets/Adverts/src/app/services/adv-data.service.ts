import { Injectable } from '@angular/core';
import { IAdv } from '../interfaces/Adv';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


// Observable class extensions
import { Observable } from 'rxjs/Observable';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class AdvDataService {

  private _getAddsUrl = 'https://api.wizardsoft.com/v1/adverts/';
  // to test: http://localhost:4200/WCYvXk6bTYW

  constructor(private _http: Http) { }


  getAdvForClient(token:string): Observable<any> {
    return this._http.get(this._getAddsUrl + token)
        .map((response: Response) => <any>response.json()) 
        //.do(data => console.log('All:' + data))
        .catch(this.handleError);
}

private handleError(error: Response) {
  return Observable.throw('You are not authorized to get this resource');
}


}
