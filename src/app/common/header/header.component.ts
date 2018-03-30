import { Component, OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SetLoginService} from '../../services/set-login.service';
import { UsersService} from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
  userId;
  usersData;
  constructor( private router:Router, private setLogin:SetLoginService, private userService:UsersService) { }

  ngOnInit() {
    this.setLogin.getUser().subscribe((id) => {
      this.userId = id;
      this.userService.getUsers().subscribe((user) => {
        this.usersData = user;
        this.filterData(this.userId);
      });
    });
    this.setLogin.setUser(localStorage.getItem('user'));
  }
  ngOnChanges(){

  }
  filterData(id){
    this.usersData = this.usersData.filter((object)=>object.id==id);
    this.usersData = this.usersData[0];
  }
  logOut(){
    this.setLogin.clearUser();
  }
}
