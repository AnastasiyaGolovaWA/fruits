import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportComponent } from './pages/report/report.component';
import { ApiModule } from 'api';
import { GetDelivery } from './pages/getDelivery/getDelivery.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    AppRoutingModule,
    FormsModule, 
    CommonModule,
    BrowserAnimationsModule,
    ApiModule,
  ],
  declarations: [AppComponent, HomeComponent, ReportComponent, GetDelivery],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }