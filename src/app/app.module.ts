import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiscalYearData } from './fiscalyear-data.service';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';

import { GrowlModule } from 'ngx-growl';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateFiscalyearComponent } from './create-fiscalyear/create-fiscalyear.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateFiscalyearComponent
  ],
  imports: [
    BrowserModule,
    GrowlModule.forRoot({ maxMessages: 1, displayTimeMs: 3000 }),
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    AppRoutingModule, InMemoryWebApiModule.forRoot(FiscalYearData), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
