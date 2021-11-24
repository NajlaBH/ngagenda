import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';


@Component({
  selector: 'app-ccontacts',
  templateUrl: './ccontacts.component.html',
  styleUrls: ['./ccontacts.component.css']
})
export class CcontactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 contacts:Contact[] = [
    new Contact(1,'test user','testuser@gmail.com','+21600000000','1020 Tunis.'),
    new Contact(2,'dev user','devuser@gmail.com','+00336908890','75 Paris.'),
    new Contact(3,'help desk', 'helpdesk@gmail.com','+00434098678','Swiss.')
 ]
}
