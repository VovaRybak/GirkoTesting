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
  currentPage;
  perPage;
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
        this.usersData=users
        this.sortData();
        this.pageCategory = params.category;
	      this.filterData(params.category);
        this.perPage = 8;
        this.chooseForPage(params.page,this.perPage);  
        this.usersCategory = this.usersData[0].category; 
      });
  }
  sortData(){
    let proAmount=0;
    this.usersData.sort((a,b)=>{
       if(a['pro'])
       {
         if(b['pro'])
         {
             return b['likes']-a['likes'];
         }
         else
           return -1;
       }
       else{
         if(b['pro'])
         {
            return 1;
         }
       }

    });
    this.usersData.forEach((value)=>{if(value['pro']) proAmount++;})
    let tempArray,tempSorted;
    console.log(proAmount);
    tempArray = this.usersData.slice(proAmount,this.usersData.length);
    tempSorted = this.usersData.slice(0,proAmount);
    tempArray.sort((a,b)=>b['likes']-a['likes']);
    console.log(tempSorted);
    console.log(tempArray);
    this.usersData = tempSorted.concat(tempArray);
    //this.usersData += tempArray.slice(0);
  }
  chooseForPage(page=1,onPage){
    this.currentPage = page;
    let startIndex = (page*onPage)-onPage;
    this.usersData = this.usersData.slice(startIndex,startIndex+onPage);
  }
  filterData(category){
    this.usersData = this.usersData.filter((object)=>{
      let temp = category;
      return (object.short_category===(temp));
    });
    this.amountItems = this.usersData.length;
  }

}
