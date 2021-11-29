import { Injectable } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

@Injectable({
  providedIn: 'root'
})


export class NvbarService {
  isShown:boolean=false;
  isAuthenticated:boolean=false;

  userName:string="PublicUser";
  constructor(){}

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
       console.log("trueif:",this.isAuthenticated,this.isShown);
       return this.isAuthenticated;
    }else{
       alert("Please check your credits.");
       this.isAuthenticated=false;
       this.isShown=false;
       this.userName="PublicUser";
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
