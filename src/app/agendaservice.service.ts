import { Injectable } from '@angular/core';
import { AuthComponent } from './auth/auth.component';


@Injectable({
  providedIn: 'root'
})

export class AgendaserviceService {
  serviceValue:boolean=true;
  //tmpValue:boolean=false;
  
  constructor(){}
  //constructor(private authen: AuthComponent) { }

  /*getisAuthenticated(){
    this.tmpValue=this.authen.checkCredits();
    console.log(this.tmpValue);
  }

  this.serviceValue= this.getisAuthenticated();
  */
}
