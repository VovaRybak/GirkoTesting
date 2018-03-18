import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersData;
  usersCategory;
  pageCategory;
  amountItems;
  constructor(private usersService:UsersService, private route: ActivatedRoute) { }

  ngOnInit() {	
    this.route.queryParams
        .subscribe(params => {       
          this.getUsers(params);         
        });
  }
    getUsers(params){
    this.usersService.getUsers()
      .subscribe(users=>{       
        this.usersData=users["users"]
        this.pageCategory = params.category;
	      this.filterData(params.category);
        this.chooseForPage(params.page);  
        this.usersCategory = this.usersData[0].category; 
      });
  }
  chooseForPage(page=1){
    let startIndex = (page*5)-5;
    this.usersData = this.usersData.slice(startIndex,startIndex+5);
  }
  filterData(category){
    this.usersData = this.usersData.filter((object)=>{
      let temp = category;
      return (object.short_category===(temp));
    });
    this.amountItems = this.usersData.length;
  }

}
