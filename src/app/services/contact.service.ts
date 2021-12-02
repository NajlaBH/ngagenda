import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


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
  ];

  indexToUpdate:number=0;

  //constructor() { }
  constructor(private router: Router){ } 

  //Delete task
  deleteContact(key: number) {
    this.contactserv.forEach((value,index)=>{
        if(value.contactid==key) 
	   this.contactserv.splice(index,1);
           console.log("index deleted:", index);

        });
  }

  //Update task
  getId(key:number){
    this.contactserv.forEach((value,index)=>{
     if(value.contactid==key) 
           //console.log("index Updated:", index);
	   this.indexToUpdate= key;
	   //console.log("indexToUpdated:", this.indexToUpdate);
	   this.router.navigateByUrl('/updateContact');
           return index;
        });
   }
  
}
