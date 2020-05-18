import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  //apiurl:string = "http://localhost:8000";
  apiurl:string = "http://phpoutils-env-1.eu-west-2.elasticbeanstalk.com";
  constructor(private http: HttpClient) { }

  getAllVideos(){
  	return this.http.get(this.apiurl + "/api/videos");
  }

  getAllPhotos(){
  	return this.http.get(this.apiurl + "/api/photos");
  }

  login(data:object){
    return this.http.post(this.apiurl + "/api/login",JSON.stringify(data));
  }


  //localstorage
  setStorage(key,value){
    localStorage.setItem(key,value);
  }

  getStorage(key){
    return localStorage.getItem(key);
  }

  removeStorage(key){
    localStorage.removeItem(key);
  }

}
