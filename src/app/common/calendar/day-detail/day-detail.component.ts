import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
@Input() daySelected;
@Input() eventSelected;
@Output() onAdded = new EventEmitter<any>();
@Input() citiesArray;
eventDescription;
eventType;
eventCity;
showForm:boolean = false;
  eventCategories = [{"name":"День народження","tag":"birthday"},{"name":"Весілля","tag":"wedding"},{"name":"Бенкет","tag":"buffet"},{"name":"Освітня","tag":"education"},{"name":"Інше","tag":"other"}];
  monthNames = ["Січеня","Лютого","Березня","Квітня", "Травня", "Червня","Липня","Серпня","Вересня","Жовтня","Листопада","Грудня"];
  sendEvent(){
    this.onAdded.emit({"event_type":this.eventType,"description":this.eventDescription,"city":this.eventCity});
    this.showForm = false;
  }
  showFormFn(){
    this.showForm = true;
  }
  catchCity(city){
    this.eventCity = city.value;
  }
  catchDescription(desc){
    this.eventDescription = desc.value;
  }
  catchCategory(category){
    this.eventType = category.value;
  }
  constructor() { }
  getEventName(event){
    switch (event['event_type']){
      case 'birthday': return "День народження";
      case 'wedding': return "Весілля";
      case 'other': return "Інше";
      case 'buffet': return "Бенкет";
      case 'education': return "Освітня";
    }
  }
  ngOnInit() {

  }

}
