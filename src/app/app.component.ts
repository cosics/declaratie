import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  form: FormGroup;

  title:string = 'Declaratie pe proprie raspundere';
  date:string = "Date personale"
  dep:String = 'Data si motivul deplasarii'
  explicatie:String = 'Acum explici motivul deplasarii'


  motiv: string;
  motiveList: string[] = ['Motive personale', 'Ajutor varstnici', 'Deplasare job', 'Doresc sa ma infectez LoLz'];

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.form = this.formBuilder.group({
      lastName: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      firstName: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      // radio: ['', Validators.required]
      radio: new FormControl('', Validators.required)
    });
  }

  }



