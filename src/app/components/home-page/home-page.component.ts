import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	categoryList = [
      { categoryName:"Фотографи", categoryTag:"photo"},
      { categoryName:"Відеооператори", categoryTag:"video"},
      { categoryName:"Музиканти", categoryTag:"music"},
      { categoryName:"Тамада", categoryTag:"tamada"},
      { categoryName:"Ресторани", categoryTag:"restaurant"},
      { categoryName:"Оформлення залу", categoryTag:"decoration"},
      { categoryName:"Торти та караваї", categoryTag:"cakes"},
      { categoryName:"Автомобілі", categoryTag:"auto"},
      { categoryName:"Весільні сукні", categoryTag:"dress"},
      { categoryName:"Шоу програма", categoryTag:"show"},
      { categoryName:"Організація весілля", categoryTag:"organization"},
      { categoryName:"Салони краси", categoryTag:"beauty"},
      { categoryName:"Феєрверки та спецефекти", categoryTag:"fireworks"},
      { categoryName:"Запрошення та аксесуари", categoryTag:"invites"},
      { categoryName:"Перший танець", categoryTag:"dance"},
      { categoryName:"Фуршетний стіл", categoryTag:"buffet"},
      { categoryName:"Весільні букети", categoryTag:"flowers"},
      { categoryName:"РАЦСи", categoryTag:"racs"}
    ];
	cityList = [
      { cityName:"Київ", cityTag:"kyiv"},
      { cityName:"Львів", cityTag:"lviv"},
      { cityName:"Івано-Франківськ", cityTag:"ivano_frankivsk"},
      { cityName:"Тернопіль", cityTag:"ternopil"},
      { cityName:"Луцьк", cityTag:"lutsk"},
      { cityName:"Рівне", cityTag:"rivne"},
      { cityName:"Ужгород", cityTag:"uzhgorod"},
      { cityName:"Одеса", cityTag:"odesa"},
      { cityName:"Чернівці", cityTag:"chernivtsi"},
      { cityName:"Хмельницький", cityTag:"khmelnytskiy"},
      { cityName:"Вінниця", cityTag:"vinnytsya"},
      { cityName:"Запоріжжя", cityTag:"zaporizhya"},
      { cityName:"Дніпро", cityTag:"dnipro"},
      { cityName:"Кривий Ріг", cityTag:"kryvyi_rig"},
      { cityName:"Миколаїв", cityTag:"mykolayiv"},
      { cityName:"Харків", cityTag:"kharkiv"},
      { cityName:"Херсон", cityTag:"kherson"},
      { cityName:"Полтава", cityTag:"poltava"},
      { cityName:"Чернігів", cityTag:"chernigiv"},
      { cityName:"Черкаси", cityTag:"cherkasy"},
      { cityName:"Житомир", cityTag:"zhytomyr"},
      { cityName:"Суми", cityTag:"sumy"},
      { cityName:"Кропивницький", cityTag:"kropyvnytskiy"},
      { cityName:"Маріуполь", cityTag:"mariupol"}
    ];
  constructor() { }

  ngOnInit() {
  }

}
