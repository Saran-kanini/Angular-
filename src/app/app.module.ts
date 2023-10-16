import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetallComponent } from './CurrentGetall/getall.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CurrentGetbyIdComponent } from './current-getby-id/current-getby-id.component';
import { CurrentPutComponent } from './current-put/current-put.component';
import { CurrentDeleteComponent } from './current-delete/current-delete.component';
import { CurrentInsertComponent } from './current-insert/current-insert.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    GetallComponent,
    HomeComponent,
    CurrentGetbyIdComponent,
    CurrentPutComponent,
    CurrentDeleteComponent,
    CurrentInsertComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

