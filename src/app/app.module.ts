import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from "@angular/forms";
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { UsersService } from "./services/users.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FilterComponent } from './common/filter/filter.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogItemComponent } from './common/catalog-item/catalog-item.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UsersListComponent } from './components/search-page/users-list/users-list.component';
import { UserListItemComponent } from './components/search-page/users-list/user-list-item/user-list-item.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { TooltipComponent } from './common/tooltip/tooltip.component';
import { PersonComponent } from './components/person/person.component';
import { MediaListComponent } from './components/person/media-list/media-list.component';
import { FooterComponent } from './common/footer/footer.component';
import { MediaService } from './services/media.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    CatalogComponent,
    CatalogItemComponent,
    HomePageComponent,
    SearchPageComponent,
    UsersListComponent,
    UserListItemComponent,
    PaginationComponent,
    TooltipComponent,
    PersonComponent,
    MediaListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AuthModule
  ],
  providers: [ UsersService, HttpClient, MediaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
