import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiscalYearData } from './fiscalyear-data.service';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateFiscalyearComponent } from './create-fiscalyear/create-fiscalyear.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateFiscalyearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, InMemoryWebApiModule.forRoot(FiscalYearData), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
