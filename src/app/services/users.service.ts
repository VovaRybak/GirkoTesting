import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsersService {
  usersUrl = "assets/users.json"
  constructor(private http:HttpClient) { }
  getUsers(){
  	return this.http.get(this.usersUrl);
  }
}
/*getUsers(category){
  	let tempArray; 
  	this.http.get(this.usersUrl).subscribe((users)=>tempArray=users);
  	tempArray = tempArray.filter((object)=>{
      let temp = category;
      return (object.category===(temp));
    });
  	return tempArray;
  }*/