import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Location, LocationTree } from '../dto/location.dto';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiURL = "http://172.16.10.86:75/erp/api/hr/";
  constructor( private http: HttpClient) { }

  getListLocationTree(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZCN0FDQzUyMDMwNUJGREI0RjcyNTJEQUVCMjE3N0NDMDkxRkFBRTEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJhM3JNVWdNRnY5dFBjbExhNnlGM3pBa2ZxdUUifQ.eyJuYmYiOjE2ODQyOTM2MDYsImV4cCI6MTY4NDI5NzIwNiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdCIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0L3Jlc291cmNlcyIsImFkbWluYXBpIl0sImNsaWVudF9pZCI6ImFkbWluIiwic3ViIjoiMTc1ZWFhZDAtMjBhZC00ZDNlLWEyNzgtYTY1OGQwNWQ1NWJjIiwiYXV0aF90aW1lIjoxNjg0MjkzNjA2LCJpZHAiOiJsb2NhbCIsInByb2ZpbGUiOiIxIiwibmFtZSI6Ik5ndXnhu4VuIFbEg24gSGFjaGkiLCJzY29wZSI6WyJhZG1pbmFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwYXNzd29yZCJdfQ.LSZGIIyi1uuI8o6qhQGJ383-MsB_Y7fBW1ZQO4OpxBSztxX-ikXl8wRWh9bqKcuoYWzAbnQg-J60rX-khUOC8pHtIiGThICQdzQx5q8TVTvcGSq-SEdzRmmoy0poLwTvU6d5j47cJtdwYzpcho6Mtujn8O7nqb7KB7Mk3VNSecUQe-zlAjJo2XohKXSwRGe9Yswct0FGVK1SiM2E7KsbotZQ14i_-ot9vD6LrFviu8PLDxM9Jpv2HtdYuCYq6tVKm8TJE_VltXEk8F9MUJoQb8oSP8-sjjy4r7DxBI60tDsNucssRBcVslrmJtwxx11VR2CkyiWvVLW3rhwrvZAHUg"
      })
    }
    return new Observable<any>((obs) => {
      this.http.post<LocationTree>(this.apiURL + 'GetListLocationTree',{},httpOptions
      ).subscribe((data) => {
        console.log(data);
        obs.complete();
      }, (error) => {
        obs.error(error)
      })
    })
  }
}
