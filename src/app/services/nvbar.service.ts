import { Injectable } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class NvbarService {
  isShown:boolean=false;
  isAuthenticated:boolean=false;

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
       console.log("trueif:",this.isAuthenticated,this.isShown);
       return this.isAuthenticated;
    }else{
       alert("Please check your credits.");
       this.isAuthenticated=false;
       this.isShown=false;
       this.userName="PublicUser";
       this.router.navigateByUrl('/');
       this.routeName="";
       console.log("falseif:",this.isAuthenticated,this.isShown);
       return this.isAuthenticated;
    }
  }


  clickLogout(){
    this.isShown=false;
    this.userName="PublicUser";

  }


   ngOnInit(): void{
    //this.isShown=this.checkCredits();
    //console.log("onInitauth:",this.isShown);  
   }
}
