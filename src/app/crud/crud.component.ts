import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {


   //Call service
  constructor(public contactservice: ContactService){ }
  
  //Get contacts attributes
  contacts:Contact[]= this.contactservice.contactserv ;
  
  ngOnInit(): void {
   this.contacts=this.contactservice.contactserv;
  }

}
