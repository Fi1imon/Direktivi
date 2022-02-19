import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {StyleDirectives} from "./directives/style.directives";
import { Style228Directive } from './style228.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirectives,
    Style228Directive
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
