import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { SetLoginService} from '../../services/set-login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
userPassword;
userEmail;
usersData;
  constructor(private auth:AuthService,private setLogin: SetLoginService) { }
  ngOnInit() {

  }
  checkAuth(){
  	this.auth.checkAuth(this.userEmail,this.userPassword)
  		.subscribe((value)=>{
  			this.usersData=value;
  			this.usersData = this.usersData.filter((item)=>(item['password']==this.userPassword)&&(item['email']==this.userEmail))
  			localStorage.setItem("user",this.usersData[0].id);
        localStorage.setItem("user_name",this.usersData[0].name);
  			console.log(localStorage.getItem("user"));
  			this.setLogin.setUser(localStorage.getItem("user"));
  			this.userEmail = '';
  			this.userPassword ='';
  		})
  }

}
