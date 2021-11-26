import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  
  //is Authenticated
  public isAuthenticated:boolean=false;

  loginValue:string="";
  passValue:string="";

  
  
  constructor(){}

  ngOnInit(): void{

  }


  checkCredits(){
    if ((this.loginValue == "admin") && (this.passValue == "admin")){
       alert("You are logged with success");
    }else{
       alert("Please check your credits.");
    }

  }

}
