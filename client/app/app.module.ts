import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';

import { routing }                  from './app.route';
import { AppComponent }             from './components/app.component';
import { AboutComponent }           from './components/about.component';
import { HomeComponent }            from './components/home.component';
import { ErrorComponent }           from './components/error.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, AboutComponent, HomeComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
