import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ResetComponent } from './reset/reset.component';
import { AuthComponent } from './auth.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from "@angular/forms";
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  declarations: [AuthComponent,SignupComponent, SigninComponent, ResetComponent],
})
export class AuthModule { }
