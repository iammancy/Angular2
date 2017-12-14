import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AppTemplateDriven } from "./Template Driven/app.template-driven";
import { ModelDrivenComponent } from './model-driven/model-driven.component';


@NgModule({
  declarations: [
    AppComponent,
    AppTemplateDriven,
    ModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
