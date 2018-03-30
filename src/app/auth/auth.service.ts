import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { filter,switchMap,concatMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  usersUrl = "assets/users.json"
  constructor(private http:HttpClient) { }
  checkAuth(email,password){
  	return  this.http.get(this.usersUrl)
  }
}
