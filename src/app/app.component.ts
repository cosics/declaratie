import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  title: string = 'Declaratie pe proprie raspundere';
  datePers: string = 'Date personale';
  explicatie: string = 'Acum explici motivul deplasarii';
  dateCurrent = new Date();


  motiv: string;
  motiveList: string[] = [
    'Motive personale',
    'Ajutor varstnici',
    'Deplasare job',
    'Doresc sa ma infectez LoLz',
  ];

  generatePdf(){
      const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
      pdfMake.createPdf(this.registerForm).open();
     }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.registerForm  = this.formBuilder.group({
      lastName: [
            null,
            [Validators.required,
            Validators.pattern('[a-zA-Z ]*'),
            Validators.maxLength(15)]],
      firstName: [
            null,
            [Validators.required,
            Validators.pattern('[a-zA-Z ]*')],
      ],
      radio: [
             '',
            [Validators.required]],
      date1: [
            '',
            [Validators.required]],
      date2: [
            new Date(),
            [Validators.required]],
      descriere: [
            null,
            [Validators.required,
            Validators.pattern('[a-zA-Z ]*'),
            Validators.minLength(1),
            Validators.maxLength(30)]],
    });
}



onSubmit(): void  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
//     console.log( JSON.stringify(this.registerForm.value.lastName, null, 4));
    console.log('submitted');
}

onReset(): void  {
    this.submitted = false;
    this.registerForm.reset();
}


}
