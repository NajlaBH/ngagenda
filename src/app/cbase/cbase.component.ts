import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbase',
  templateUrl: './cbase.component.html',
  styleUrls: ['./cbase.component.css']
})
export class CbaseComponent implements OnInit {

  //imagePath:string="https://t4.ftcdn.net/jpg/01/27/67/79/360_F_127677934_R80d0Zy2MnHfmflBF8agHKMHZWhiDMMU.jpg"
  imagePath:string="assets/img/agenda.png"
  constructor() { }

  ngOnInit(): void {
  }

}
