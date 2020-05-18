import { Component } from '@angular/core';
import { StoreService } from '../myservice/store.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	allvideos:any = [];
	allvideos2:any = [];
  constructor(private ss : StoreService, private sanitizer : DomSanitizer) {
  	this.getAllVideos();
  }

  getAllVideos(){
  	this.ss.getAllVideos().subscribe((data)=>{
  		this.allvideos = data["hydra:member"];
  		this.allvideos2 = this.allvideos;
  	});
  }

  printSafeHtml(html){
  	return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  showOneVideo(videoid){
  	alert(videoid);
  }

}
