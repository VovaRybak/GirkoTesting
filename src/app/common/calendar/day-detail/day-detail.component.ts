import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
@Input() daySelected;
@Input() eventSelected;
@Output() onAdded = new EventEmitter<string>();
  monthNames = ["Січеня","Лютого","Березня","Квітня", "Травня", "Червня","Липня","Серпня","Вересня","Жовтня","Листопада","Грудня"];
  sendEvent(){
    this.onAdded.emit("New event");
  }
  constructor() { }

  ngOnInit() {
  }

}
