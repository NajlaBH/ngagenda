import { Component, OnInit, NgModule } from '@angular/core';

import {AgendaserviceService} from '../agendaservice.service';



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

  compValue:boolean=false;
  
  //constructor(){}
  constructor(private agendaservice: AgendaserviceService) { }

  ngOnInit(): void {
      //send to service ok
      this.compValue=this.agendaservice.serviceValue;
      console.log(this.compValue);
  }


  checkCredits(){
    if ((this.loginValue == "admin") && (this.passValue == "admin")){
       alert("You are logged with success");
       this.isAuthenticated=true;
       return this.isAuthenticated;
    }else{
       alert("Please check your credits.");
       this.isAuthenticated=false;
       return this.isAuthenticated;
    }

  }

}
