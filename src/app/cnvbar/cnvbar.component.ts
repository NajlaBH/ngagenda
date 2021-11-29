import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';

import { NvbarService } from '../services/nvbar.service';



@Component({
  selector: 'app-cnvbar',
  templateUrl: './cnvbar.component.html',
  styleUrls: ['./cnvbar.component.css']
})


export class CnvbarComponent implements OnInit {
 
  userName:string="PublicUser";

  
 
  constructor(public nvbarservice:NvbarService) { }

  ngOnInit(): void {
   //this.isShown = this.nvbarservice.authent;
  }

  //Able/disable button setting
  toggleShow() {
  	this.nvbarservice.isShown = ! this.nvbarservice.isShown;
  }

}
