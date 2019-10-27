import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResServiceApiService {
  url = '/api/data?place=';
  profile: any;
  constructor(private _http: HttpClient) { }
  getUsers(city) {
    return this._http.get<any>(this.url + city);
  }
  setRestaurant(profile: any) {
    this.profile = profile;
  }
}
