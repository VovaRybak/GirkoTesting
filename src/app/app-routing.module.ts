import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from "./components/search-page/search-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PersonComponent } from "./components/person/person.component";

const routes: Routes = [
  { path: 'person/:id', component: PersonComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'home', component: HomePageComponent }
 /* { path: '', redirectTo: '/home?category=all', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent }*/
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
