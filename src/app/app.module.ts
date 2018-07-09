import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FnafAlertComponent } from './fnaf-alert/fnaf-alert-component';

@NgModule({
  declarations: [
    AppComponent,
    FnafAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
