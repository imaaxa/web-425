import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIcon,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
