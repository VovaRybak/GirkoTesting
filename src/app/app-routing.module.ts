import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from "./components/search-page/search-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PersonComponent } from "./components/person/person.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ResetComponent } from "./auth/reset/reset.component";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
  { path: 'person/:id', component: PersonComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'home', component: HomePageComponent },
  {	path: 'auth', component: AuthComponent,
	children: [
		{	path: '', redirectTo: 'signup', pathMatch: 'full'},
		{	path: 'signup', component: SignupComponent},
		{	path: 'signin', component: SigninComponent},
	  	{	path: 'reset', component: ResetComponent}]
	}, 
  { path: '', redirectTo: 'home', pathMatch: 'full' }
 /* { path: '', redirectTo: '/home?category=all', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent }*/
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
