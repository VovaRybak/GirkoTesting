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
  pageCategory;
  pageCity;
  amountItems;
  currentPage;
  perPage;
  pageTitle;
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
        this.pageCity = params.city;
        if(params.category) this.filterData(params.category);
	      if(params.city) this.filterByCity(this.returnCityName(params.city));
        this.perPage = 8;
        this.chooseForPage(params.page,this.perPage);
        this.pageTitle = this.setTitle(this.returnCategoryName(params.category),this.returnCityName(params.city));
      });
  }
  setTitle(category,city){
    let temp ='';
    if(category){
      temp+=category;
      if(city) temp+=" в місті "+ city;
      else temp+= " в Україні"
    }
    else{
      if(city) temp+='Постачальники послуг в місті '+city;
      else temp += 'За даним запитом постачальників не знайдено'
    }
    return temp;
  }
  returnCategoryName(param){
    switch (param){
      case "photo": return "Фотографи";
      case "video": return "Відеооператори";
      case "music": return "Музиканти";
      case "tamada": return "Тамада";
      case "restaurant": return "Ресторани";
      case "decoration": return "Оформлення залу";
      case "cakes": return "Торти та караваї";
      case "auto": return "Автомобілі";
      case "dress": return "Весільні сукні";
      case "show": return "Шоу програма";
      case "organization": return "Організація весілля";
      case "beauty": return "Салони краси";
      case "fireworks": return "Феєрверки та спецефекти";
      case "invites": return "Запрошення та аксесуари";
      case "dance": return "Перший танець";
      case "buffet": return "Фуршетний стіл";
      case "flowers": return "Весільні букети";
      case "poltava": return "Полтава";
      case "racs": return "РАЦСи";
    }
  }
  returnCityName(param){
    switch (param){
      case "kyiv": return "Київ";
      case "lviv": return "Львів";
      case "ivano_frankivsk": return "Івано-Франківськ";
      case "ternopil": return "Тернопіль";
      case "lutsk": return "Луцьк";
      case "rivne": return "Рівне";
      case "uzhgorod": return "Ужгород";
      case "odesa": return "Одеса";
      case "chernivtsi": return "Чернівці";
      case "khmelnytskiy": return "Хмельницький";
      case "vinnytsya": return "Вінниця";
      case "zaporizhya": return "Запоріжжя";
      case "dnipro": return "Дніпро";
      case "kryvyi_rig": return "Кривий Ріг";
      case "mykolayiv": return "Миколаїв";
      case "kharkiv": return "Харків";
      case "kherson": return "Херсон";
      case "poltava": return "Полтава";
      case "chernigiv": return "Чернігів";
      case "cherkasy": return "Черкаси";
      case "zhytomyr": return "Житомир";
      case "sumy": return "Суми";
      case "kropyvnytskiy": return "Кропивницький";
      case "mariupol": return "Маріуполь";
    }
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
    tempArray = this.usersData.slice(proAmount,this.usersData.length);
    tempSorted = this.usersData.slice(0,proAmount);
    tempArray.sort((a,b)=>b['likes']-a['likes']);
    this.usersData = tempSorted.concat(tempArray);
    //this.usersData += tempArray.slice(0);
  }
  chooseForPage(page=1,onPage){
    this.currentPage = page;
    let startIndex = (page*onPage)-onPage;
    this.usersData = this.usersData.slice(startIndex,startIndex+onPage);
  }
  filterByCity(city){
    console.log(this.usersData);
    console.log(city);
    this.usersData = this.usersData.filter((object)=>{
      let temp = object.cities;
      return (temp.find((value)=>value === city)!==undefined);
    });
    this.amountItems = this.usersData.length;
  }
  filterData(category){
    this.usersData = this.usersData.filter((object)=>{
      let temp = category;
      return (object.short_category===(temp));
    });
    this.amountItems = this.usersData.length;
  }

}
