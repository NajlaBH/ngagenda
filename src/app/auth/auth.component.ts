import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // Authentification
  isAuthenticated:boolean=false;

  //Initialize credits
  loginValue:string="";
  passValue:string="";

 
  //constructor(){}
 


  // Check credits inputs
  checkCredits(){
    if ((this.loginValue == "admin") && (this.passValue == "admin")){
       alert("You are logged with success");
       this.isAuthenticated=true;
       //console.log("trueif:",this.isAuthenticated);
       
       return this.isAuthenticated;
    }else{
       alert("Please check your credits.");
       this.isAuthenticated=false;
       console.log("falseif:",this.isAuthenticated);
       return this.isAuthenticated;
    }
  }

  ngOnInit(): void{
    //this.isAuthenticated=this.checkCredits();
    //console.log("onInitauth:",this.isAuthenticated);  
  }
  
  

}
