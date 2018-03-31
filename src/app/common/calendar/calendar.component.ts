import { Component,OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { EventsService} from '../../services/events.service';

class CalendarDate {
  date: Date;
  thisMonth: boolean;
  isToday: boolean;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();
  weekDays = ["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];
  monthNames = ["Січень","Лютий","Березень","Квітень", "Травень", "Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
  userId;
  userData;
  eventsData;
  monthDaysObject:CalendarDate[]=[];
  monthWeeksObject:CalendarDate[][]=[];
  selectedDataEvent;
  selectedData;

  constructor(private userService:UsersService,private route:ActivatedRoute,private eventsService:EventsService) {}

  ngOnInit() {
    this.selectedData = {date:this.currentDate.getDate(),month:this.currentDate.getMonth(),year:this.currentDate.getFullYear()};
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUsersById();
    this.formMonthDays(this.currentDate);
    this.formMonthWeeks();

  }
  addNewEvent(event){
    this.eventsData.push({
      id:+this.userId,
      year:this.selectedData.year.toString(),
      month:this.selectedData.month.toString(),
      date:this.selectedData.date.toString(),
      description:event.description,
      event_type:event.event_type,
      city:event.city
    });
    let tmp = new Date(this.selectedData.year,this.selectedData.month,this.selectedData.date)
    this.selectedDataEvent = this.getEventByDate(tmp);
  }
  chooseDate(date){
    this.selectedData = {date:date.getDate(),month:date.getMonth(),year:date.getFullYear()};
    this.selectedDataEvent = this.getEventByDate(date);
  }
  getEventsById(){
    this.eventsService.getEvents()
      .subscribe((event)=>{
        this.eventsData=event;
        this.filterEvents(this.userId);
        this.selectedDataEvent = this.getEventByDate(this.currentDate);
      })
  }
  isReserved(date){
    let temp;
    if(!this.eventsData || !this.eventsData.length) return false;

    temp = this.eventsData.filter((event)=>
      event.year==date.getFullYear()
      && event.month==date.getMonth()
      && event.date==date.getDate());
    return temp.length;
  }
  isSelected(date){
    return date.getMonth()===this.selectedData.month&&date.getDate()===this.selectedData.date&&date.getFullYear()===this.selectedData.year;
  }
  eventTypeClass(day){
    return 'calendar__day--'+this.getEventByDate(day)['event_type'];
  }
  getEventByDate(date){
    let temp;
    if(!this.eventsData || !this.eventsData.length) return [];
    temp = this.eventsData.filter((event)=>
      event.year==date.getFullYear()
      && event.month==date.getMonth()
      && event.date==date.getDate());
    return temp[0];
  }
  getUsersById(){
    this.userService.getUsers()
      .subscribe((user)=>{
        this.userData=user;
        this.filterData(this.userId);
        this.getEventsById();

      })
  }
  filterData(id){
    this.userData = this.userData.filter((object)=>object.id==id);
    this.userData = this.userData[0];
  }
  filterEvents(id){
    this.eventsData = this.eventsData.filter((object)=>object.id==id);
  }
  static getMonthDays(date){
    return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
  }
  static getDayOfWeek(date){
    return date.getDay();
  }
  nextMonth(){
    let date: Date = this.currentDate;
    date.setMonth(date.getMonth()+1);
    this.formMonthDays(date);
    this.formMonthWeeks();
  }
  prevMonth(){
    let date = this.currentDate;
    date.setMonth(date.getMonth()-1);
    this.formMonthDays(date);
    this.formMonthWeeks();
  }
  nextYear(){
    let date: Date = this.currentDate;
    date.setFullYear(date.getFullYear()+1);
    this.formMonthDays(date);
    this.formMonthWeeks();
  }
  prevYear(){
    let date = this.currentDate;
    date.setFullYear(date.getFullYear()-1);
    this.formMonthDays(date);
    this.formMonthWeeks();
  }
  formMonthDays(date){
    let curMonth = date.getMonth();
    let daysFromPrev = CalendarComponent.getDayOfWeek(new Date(date.getFullYear(),curMonth,1))===0?6:CalendarComponent.getDayOfWeek(new Date(date.getFullYear(),curMonth,1))-1;
    let daysInCurrMonth = CalendarComponent.getMonthDays(date);
    let daysFromNext = 42 - (daysInCurrMonth+daysFromPrev);
    let daysInPrevMonth = CalendarComponent.getMonthDays(new Date(date.getFullYear(),curMonth-1, 1));
    for(let i = 1, tmpPrev = daysInPrevMonth-daysFromPrev+1;i<=daysFromPrev;i++,tmpPrev++)
    {
      let temp  = new Date(curMonth==0?date.getFullYear()-1:date.getFullYear(),curMonth-1, tmpPrev);
      let object = new CalendarDate();
      object.date = temp;
      object.thisMonth = false;
      object.isToday = false;
      this.monthDaysObject[this.monthDaysObject.length] = object;
    }

    for(let i = 1; i<=daysInCurrMonth;i++)
    {
      let temp = new Date(date.getFullYear(),curMonth, i);
      let object = new CalendarDate();
      object.date = temp;
      object.thisMonth = true;
      object.isToday = (object.date.getDate()===new Date().getDate())&&(object.date.getMonth()===new Date().getMonth());
      this.monthDaysObject[this.monthDaysObject.length] = object;
    }
    for(let i = 1; i<=daysFromNext;i++)
    {
      let temp = new Date(curMonth==11?date.getFullYear()+1:date.getFullYear(),curMonth+1, i);
      let object = new CalendarDate();
      object.date = temp;
      object.thisMonth = false;
      object.isToday = false;
      this.monthDaysObject[this.monthDaysObject.length] = object;
    }
  }

  formMonthWeeks(){
    this.monthWeeksObject = [];
    while(this.monthDaysObject.length>0){
      this.monthWeeksObject.push(this.monthDaysObject.splice(0, 7));
    }
  }

}
