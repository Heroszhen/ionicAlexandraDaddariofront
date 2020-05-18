import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  apiurl:string = "http://localhost:8000/api";
  constructor(private http: HttpClient) { }

  getAllVideos(){
  	return this.http.get(this.apiurl + "/videos");
  }

}
