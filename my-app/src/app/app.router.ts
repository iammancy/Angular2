import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { ModelDrivenComponent } from "./model-driven/model-driven.component";
import { HomeComponent } from "./home/home.component";
import { FbModelDrivenComponent } from "./fb-model-driven/fb-model-driven.component";

export const router: Routes = [
    { path: '',  component:HomeComponent, pathMatch:"full"},
    { path: 'template-driven', component: TemplateDrivenComponent},
    { path: 'model-driven', component: ModelDrivenComponent },
    { path: 'home', component: HomeComponent },
    { path: 'fb-model-driven', component: FbModelDrivenComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);