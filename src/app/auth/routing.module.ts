import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ResetComponent } from "./reset/reset.component";

const routes: Routes = [
  {	path: 'signin', component: SigninComponent},
  {	path: 'signup', component: SignupComponent},
  {	path: 'reset', component: ResetComponent}
 /* { path: '', redirectTo: '/home?category=all', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RoutingModule ]
})
export class RoutingModule { }
