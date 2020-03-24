import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"step1", component:Step1Component},
  {path:"step2", component:Step2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
