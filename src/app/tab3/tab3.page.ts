import { Component } from '@angular/core';
import { StoreService } from '../myservice/store.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	login:Number = 0;
	loginform = {
		"email":"",
		"password":""
	};
  constructor(private ss : StoreService) {
  	this.getLoginStatut();
  }

  getLoginStatut(){
  	if(this.ss.getStorage("user") != null)this.login = 1;
  }

  logForm(){
  	this.ss.login(this.loginform).subscribe((data)=>{
  		if(data["status"] == 1){
  			this.ss.setStorage("user",JSON.stringify(data["user"]));
  			this.login = 1;
  			this.loginform.email = "";
  			this.loginform.password = "";
  		}
  	});
  }

  logout(){
  	this.ss.removeStorage("user");
  	this.login = 0;
  }

}
