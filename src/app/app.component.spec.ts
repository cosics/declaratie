import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HeaderComponent } from './components/layout/header/header.component';
// import { NumeComponent } from './components/nume/nume.component';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { DateComponent } from './components/date/date.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatIconModule} from '@angular/material/icon';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatIconModule,
    MatRadioModule,
    BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();
  }));


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'formapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Declaratie pe proprie raspundere');
  });

  it(`should have as explicatie 'Acum explici motivul deplasarii'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.explicatie).toEqual('Acum explici motivul deplasarii');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Declaratie pe proprie raspundere');
  });

  it(`should not have as registerForm 'formapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.registerForm).not.toBeTruthy();
  });

  it('is form valid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.registerForm.valid).toBeTruthy();
  });

//   fit('lastName field validity', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
    // expect(app.registerForm.lastName.valid).toBeFalsy();

    // app.registerForm.value.lastName.setValue('');
    // expect(app.registerForm.value.lastName.hasError('required')).toBeTruthy();

    // app.registerForm.value.lastName.setValue('A');
    // expect(app.registerForm.value.lastName.hasError('minLength')).toBeTruthy();

    // const name = app.registerForm.controls['lastName'];
    // expect(name.valid).toBeFalsy();

    // let errors = {};
    // name.setValue('');
    // errors = name.errors || {};
    // expect(errors['required']).toBeTruthy(); // this works
    // expect(errors['minLength']).toBeTruthy(); // this fails, "undefined"
});





// describe('', () => {
//   it('is app component defined', () => {
//     let component
//   })
// })
