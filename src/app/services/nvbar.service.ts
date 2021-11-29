import { Injectable } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

@Injectable({
  providedIn: 'root'
})


export class NvbarService {
  isShown:boolean=false;
  isAuthenticated:boolean=false;


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
       console.log("trueif:",this.isAuthenticated,this.isShown);
       return this.isAuthenticated;
    }else{
       alert("Please check your credits.");
       this.isAuthenticated=false;
       this.isShown=false;
       console.log("falseif:",this.isAuthenticated,this.isShown);
       return this.isAuthenticated;
    }
  }


  clickLogout(){
    this.isShown=false;
  }


   ngOnInit(): void{
    //this.isShown=this.checkCredits();
    //console.log("onInitauth:",this.isShown);  
   }
}
