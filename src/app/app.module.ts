import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HeaderComponent } from './components/layout/header/header.component';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateComponent } from './components/date/date.component';
import {MatNativeDateModule} from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatIconModule} from '@angular/material/icon';
import { RadioComponent } from './components/radio/radio.component';
import {MatRadioModule} from '@angular/material/radio';
import { DescriereComponent } from './components/descriere/descriere.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateComponent,
    RadioComponent,
    DescriereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  providers: [MatNativeDateModule, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
