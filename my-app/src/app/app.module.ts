import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { HomeComponent } from './home/home.component';
import { FbModelDrivenComponent } from "./fb-model-driven/fb-model-driven.component";

import { ListService } from "./list.service";


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    TemplateDrivenComponent,
    HomeComponent,
    FbModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
