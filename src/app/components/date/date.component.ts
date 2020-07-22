import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
constructor() {
}
date1 = new FormControl(new Date());
date2 = new Date();


  ngOnInit():void {
 
    
  }

}
