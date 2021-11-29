import { Component, OnInit, NgModule } from '@angular/core';
import { NvbarService } from '../services/nvbar.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 
  constructor(public navserv:NvbarService){}
 
  ngOnInit(): void{
 
  }
  
  

}
