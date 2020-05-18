import { Component } from '@angular/core';
import { StoreService } from '../myservice/store.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

	allphotos:any = [];
	bigimage = 0;
	bigimageurl:string = "";
  constructor(private ss : StoreService) {
  	this.getAllPhotos();
  }

  getAllPhotos(){
  	this.ss.getAllPhotos().subscribe((data)=>{
  		this.allphotos = data["hydra:member"];
  	});
  }

  switchBigImage(index){
  	if(index == -1){
  		this.bigimage = 0;
  		this.bigimageurl = ""
  		
  	}else{
  		this.bigimageurl = this.allphotos[index].link;
  		this.bigimage = 1;
  	}
  	
  }

}
