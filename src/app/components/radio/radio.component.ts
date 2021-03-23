import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  motiv: string;
  motiveList: string[] = ['Motive personale', 'Ajutor varstnici', 'Deplasare job', 'Doresc sa ma infectez'];

  constructor() { }

  ngOnInit(): void {
    
  }

}
