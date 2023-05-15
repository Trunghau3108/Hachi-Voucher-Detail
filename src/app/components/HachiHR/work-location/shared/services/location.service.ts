import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Location, LocationTree } from '../dto/location.dto';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiURL = "http://172.16.10.86:75/erp/api/hr/";
  constructor( private http: HttpClient) { }

  getListLocationTree(){
    return new Observable<any>((obs) => {
      this.http.post<LocationTree>(this.apiURL + 'GetListLocationTree',{}
      ).subscribe((data) => {
        console.log(data);
        obs.complete();
      }, (error) => {
        obs.error(error)
      })
    })
  }
}
