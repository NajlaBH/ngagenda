import { Injectable } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class NvbarService {
  isShown:boolean=false;
  
  isAuthenticated:boolean=false;
  isLoggedIn:boolean=false;

  userName:string="PublicUser";
  routeName:string="";

  constructor(private router: Router){}

  //Initialize credits
  loginValue:string="";
  passValue:string="";


  // Check credits inputs
  checkCredits(){
    if ((this.loginValue == "admin") && (this.passValue == "admin")){
       alert("You are logged with success");
       this.isAuthenticated=true; 
       this.isShown=true;
       this.userName=this.loginValue;
       this.router.navigateByUrl('/crud');
       this.routeName="/crud";
       this.isLoggedIn=true;
       console.log("trueif:",this.isAuthenticated,this.isShown,this.isLoggedIn);
       return this.isAuthenticated;
    }else{
       alert("Please check your credits.");
       this.isAuthenticated=false;
       this.isShown=false;
       this.userName="PublicUser";
       this.router.navigateByUrl('/');
       this.routeName="";
       this.isLoggedIn=false;
       console.log("falseif:",this.isAuthenticated,this.isShown,this.isLoggedIn);
       return this.isAuthenticated;
    }
  }


  clickLogout(){
    this.isShown=false;
    this.userName="PublicUser";

  }

  checkLogIn(){
    if((this.loginValue == "admin") && (this.passValue == "admin")){
    	return true;
    }else{
	return false;
    }
  }
 
  //isLoggedIn:boolean=this.checkLogIn();
  //isLoggedIn:boolean=false;

   ngOnInit(): void{

    //this.isLoggedIn=this.checkLogIn();
    //this.isShown=this.checkCredits();
    //console.log("onInitauth:",this.isShown);  
   }
}
