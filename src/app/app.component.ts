import { Component, OnInit } from '@angular/core';
import { NvbarService } from './services/nvbar.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  {
  title = 'ngagenda';

  //userName:string="PublicUser";

  constructor(public navbarservice:NvbarService) { }

  ngOnInit(): void {
  
  }


}


