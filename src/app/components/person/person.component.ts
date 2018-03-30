import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
userData;
showPhoto=true;
showVideo=false;
userId = this.route.snapshot.paramMap.get('id');
  constructor(
  				private usersService:UsersService,
  				private route: ActivatedRoute
  			) { }

  ngOnInit() {
  	this.getUsersById();
  }
  getUsersById(){
    this.usersService.getUsers()
     .subscribe((user)=>{
        this.userData=user;
        this.filterData(this.userId);
        })
  }
  filterData(id){
    this.userData = this.userData.filter((object)=>object.id==id);
    this.userData = this.userData[0];
  }
  showPhotos(){
    this.showPhoto=true;
    this.showVideo=false;
  }
  showVideos(){
    this.showPhoto=false;
    this.showVideo=true;
  }
}
