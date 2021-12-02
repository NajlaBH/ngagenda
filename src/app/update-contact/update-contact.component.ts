import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})




export class UpdateContactComponent implements OnInit {

  //Get contacts attributes
  contacts:Contact[]= this.contactservice.contactserv;
  tmpoContacts:Contact[]=[];


  ucontactid=this.contactservice.indexToUpdate;
  ufullname:string=this.contacts[this.ucontactid -1].fullname;
  uemail:string=this.contacts[this.ucontactid -1].email;
  uphone:string=this.contacts[this.ucontactid -1].phone;
  uaddress:string=this.contacts[this.ucontactid -1].address;



  //constructor() { }
  constructor(public contactservice: ContactService, private router: Router){}



  formUpContact = new FormGroup({
    ucontactid: new FormControl(this.ucontactid),
    ufullname: new FormControl(this.ufullname,Validators.required),
    uemail: new FormControl(this.uemail,[Validators.required, Validators.email]),
    uphone: new FormControl(this.uphone,Validators.required),
    uaddress: new FormControl(this.uaddress,Validators.required),
  })

  ngOnInit(): void {
  }


  onSubmit() {
    this.router.navigateByUrl('/crud');
  }

  updateContact(){
   //console.log(this.contacts[this.ucontactid -1].fullname);
   //console.log(this.ufullname,this.uemail,this.uphone,this.uaddress);
   this.contactservice.contactserv[this.ucontactid -1]={contactid:this.ucontactid,fullname:this.ufullname,email:this.uemail,phone:this.uphone,address:this.uaddress};
   //console.log(this.contactservice.contactserv[this.ucontactid -1]);
   console.log("Here update contact");
   this.onSubmit();
   this.contactservice.indexToUpdate=0;
  }
}
