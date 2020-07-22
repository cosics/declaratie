import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descriere',
  templateUrl: './descriere.component.html',
  styleUrls: ['./descriere.component.css']
})
export class DescriereComponent implements OnInit {
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
