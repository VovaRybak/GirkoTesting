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
imgV = "https://girko.net/uploadedMedia/service/vsvsb76/5424/service_list/facf9128962b3c9f536b3cfe4f22fd01ecc627a7bb3d4f665c7ab223c66afe3b.jpg";
imgP = "https://girko.net/uploadedMedia/service/vsvsb76/5424/service_list/dad19800f259bb5adf402f24b5afa01b6a3ae89356eb7e27f1abaf78132f5cd2.jpg";
  constructor( 
  				private usersService:UsersService, 
  				private route: ActivatedRoute
  			) { }

  ngOnInit() {
  	this.getUsersById();
  }
  getUsersById(){
    const userId = this.route.snapshot.paramMap.get('id');
    this.usersService.getUsers()
     .subscribe((user)=>{
        this.userData=user;
        this.filterData(userId);
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
