import { Injectable } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

@Injectable({
  providedIn: 'root'
})


export class NvbarService {
  authent:boolean=false;
  //testValue:boolean=true;
  

  constructor( private cauth:AuthComponent ) { }
  //constructor(){}

  /*
  
  getMyValue(){
    this.testValue=this.cauth.checkCredits();
    console.log("tracer isAuthenticated",this.testValue);
    return this.testValue;
  }

  //Hide-UnHide setting menu 
  //authent:boolean=this.cauth.isAuthenticated;
  authent:boolean=this.getMyValue();
  */
}


