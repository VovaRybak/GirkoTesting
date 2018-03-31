import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
@Input() catalogItem;
	usersData;
  constructor(private usersService:UsersService) { }
  ngOnInit() {
    this.initUsers();
    //this.filterData();
  }
  initUsers(){
    this.usersService.getUsers()
    .subscribe((usersDataExt)=>{
      this.usersData=usersDataExt;
      this.filterData();
    });

  }
  filterData(){
    this.usersData = this.usersData.filter((object)=>{
      let temp = this.catalogItem.category;
      return (object.category===(temp));
    });
  }
  showLocation(loc:any){
    let cities=" ";
    let separator;
    loc.forEach((person,index)=>{
      if(index<loc.length-1)
        separator=", ";
      else
        separator="";
      cities+=person+separator;
    });
    return cities;
  }

}
