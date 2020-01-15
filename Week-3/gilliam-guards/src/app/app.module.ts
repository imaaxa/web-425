import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { LoginGuard } from "./login.guard";
import { UnsavedChangesGuard } from "./unsaved-changes.guard";


@NgModule({
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent
  ],
  providers: [
    LoginGuard,
    UnsavedChangesGuard,
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
