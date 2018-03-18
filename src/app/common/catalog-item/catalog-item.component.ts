import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {
@Input() catalogItem;
	usersData; /*= [
		{ id:1,category:"Фотографи",name:"Юрій Бочко",cities:["Львів","Луцьк", "Рівне"],avatarLink:"assets/1/avatar.jpg",},
		{ id:2,category:"Фотографи",name:"Василь Зорена",cities:["Львів","Київ", "Тернопіль"],avatarLink:"assets/2/avatar.jpg",},
		{ id:3,category:"Фотографи",name:"Назар Лунів",cities:["Львів","Івано-Франківськ", "Тернопіль"],avatarLink:"assets/3/avatar.jpg",},
		{ id:4,category:"Фотографи",name:"Володимир Веретельник",cities:["Львів"],avatarLink:"assets/4/avatar.jpg",},
    { id:5,category:"Відеооператори",name:"GOODzyk production",cities:["Львів","Тернопіль", "Івано-Франківськ"],avatarLink:"assets/5/avatar.jpg",},
    { id:6,category:"Відеооператори",name:"AMUR STUDIO",cities:["Львів","Тернопіль", "Івано-Франківськ"],avatarLink:"assets/6/avatar.jpg",},
    { id:7,category:"Відеооператори",name:"E-Furor Production",cities:["Львів","Івано-Франківськ", "Тернопіль"],avatarLink:"assets/7/avatar.jpg",},
    { id:8,category:"Музиканти",name:"Гурт 'Всьо Чотко!'",cities:["Львів","Тернопіль", "Івано-Франківськ"],avatarLink:"assets/8/avatar.jpg",},
    { id:9,category:"Музиканти",name:"Гурт 'Одна Любов'",cities:["Львів","Тернопіль", "Івано-Франківськ"],avatarLink:"assets/9/avatar.jpg",},
    { id:10,category:"Музиканти",name:"Гурт 'Дві зорі'",cities:["Львів","Тернопіль", "Івано-Франківськ"],avatarLink:"assets/10/avatar.jpg",},
    { id:11,category:"Ведучі",name:"Назар Голоджун",cities:["Львів","Тернопіль", "Київ"],avatarLink:"assets/11/avatar.jpg",},
    { id:12,category:"Ведучі",name:"Андрій Рибак",cities:["Львів","Київ", "Чернівці"],avatarLink:"assets/12/avatar.jpg",},
    { id:13,category:"Ведучі",name:"Віктор Гевко",cities:["Львів","Тернопіль"],avatarLink:"assets/13/avatar.jpg",}
	];*/
  constructor(private usersService:UsersService) { }
  ngOnInit() {
    this.initUsers();
    //this.filterData();
  }
  initUsers(){
    this.usersService.getUsers()
    .subscribe((usersDataExt)=>{
      this.usersData=usersDataExt["users"];
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
