import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
//import { Component, OnInit, AfterViewInit, Directive, ViewChild } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';


/*@Directive({
  selector: 'auth-directive'
})
class AuthDirective{
}
*/


@Component({
  selector: 'app-cnvbar',
  templateUrl: './cnvbar.component.html',
  styleUrls: ['./cnvbar.component.css']
})


//export class CnvbarComponent implements OnInit, AfterViewInit {
export class CnvbarComponent implements OnInit {
  //Authentication
  //@ViewChild(AuthComponent) authen!: AuthComponent;
  //@ViewChild('authen', {static: true, read: AuthComponent}) authen: AuthComponent;
  
  //Setting btn
  public isShown:boolean=false;
  //public testval:boolean=false;
 

  


  constructor() { }

 /* ngAfterViewInit(){
    this.testval=this.authen.isAuthenticated;
    console.log(this.testval);
  }*/

  ngOnInit(): void {
   this.isShown = false;
  }

  //Able/disable button setting
  toggleShow() {
  	this.isShown = ! this.isShown;
  }

}
