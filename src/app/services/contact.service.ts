import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  //Initialize contact table
  contactserv:Contact[] = [
    new Contact(1,'test user','testuser@gmail.com','+21600000000','1020 Tunis.'),
    new Contact(2,'dev user','devuser@gmail.com','+00336908890','75 Paris.'),
    new Contact(3,'help desk', 'helpdesk@gmail.com','+00434098678','Swiss.')
  ]


  constructor() { }


}
