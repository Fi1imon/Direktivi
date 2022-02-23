import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {MyOwnPipe} from "./pipes/my-own.pipe";
import { PreMarksPipe } from './pipes/pre-marks.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyOwnPipe,
    PreMarksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
