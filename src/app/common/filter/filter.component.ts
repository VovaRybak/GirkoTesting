import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
@Output() sendSearch = new EventEmitter<any>();
@Input() categorysList;
@Input() citysList;
  constructor() { }

  ngOnInit() {
  }
  onSearch(){
  	this.sendSearch.emit("from child");
  }

}
