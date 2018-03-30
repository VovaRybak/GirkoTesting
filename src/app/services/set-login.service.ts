import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SetLoginService {
  private user = new Subject();
  constructor() { }
  setUser(value){
    this.user.next(value);
  }
  clearUser(){
    this.user.next();
  }
  getUser(){
    return this.user.asObservable();
  }


}
