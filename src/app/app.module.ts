import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MaterialModule } from './core/material.module';
import { HttpClientModule } from '@angular/common/http';
import { BgColorDirective } from './shared/bg-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
