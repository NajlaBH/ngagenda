import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';

import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-ccontacts',
  templateUrl: './ccontacts.component.html',
  styleUrls: ['./ccontacts.component.css']
})


export class CcontactsComponent implements OnInit {
  //Call service
  constructor(private contactservice: ContactService){ }
  
  //Get contacts attributes
  contacts:Contact[]=[];
  
  ngOnInit(): void {
    this.contacts=this.contactservice.contactserv;
  }

 
}
