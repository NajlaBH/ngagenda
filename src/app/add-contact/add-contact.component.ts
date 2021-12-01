import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ContactService } from '../services/contact.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../models/contact';



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
   // new contact attributs
   //ncontactid:number=0;
   nfullname:string="";
   nemail:string="";
   nphone:string="";
   naddress:string="";

  //constructor() { }
  //Call service
  constructor(public contactservice: ContactService,private router: Router){ }
  
  //Get contacts attributes
  contacts:Contact[]= this.contactservice.contactserv;
  tmpContacts:Contact[]=[];


  maxIndex=this.contacts.reduce(function(prev:any, current:any) {
    if (+current.contactid > +prev.contactid) {
        return current;
    } else {
        return prev;
    }
  }); 
  newContacts:Contact[]=[];
  ncontactid:number= this.maxIndex.contactid +1;


  onSubmit() {
    this.router.navigateByUrl('/crud');
  }




  addContact(){
	this.tmpContacts=[{
	        contactid:this.ncontactid,
    		fullname:this.nfullname,
    		email:this.nemail,
    		phone:this.nphone,
    		address:this.naddress
	},]	
        console.log("ncontactid", this.ncontactid);  
	console.log("tmpContacts:", this.tmpContacts);
	this.newContacts=this.contactservice.contactserv.concat(this.tmpContacts);
	console.log("newcontact:",this.newContacts);
	this.contactservice.contactserv=this.newContacts;
	this.onSubmit();
	return this.newContacts;
  }


  formContact = new FormGroup({
    ncontactid: new FormControl(''),
    nfullname: new FormControl('',Validators.required),
    nemail: new FormControl('',[Validators.required, Validators.email]),
    nphone: new FormControl('',[Validators.required, Validators.maxLength(8)]),
    naddress: new FormControl('',Validators.required),
  })


  //newContacts:Contact[]=this.contactservice.contactserv.push(this.addContact());
  ngOnInit(): void {
  }

}
