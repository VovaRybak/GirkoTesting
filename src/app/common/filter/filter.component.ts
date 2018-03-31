import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
@Input() categorysList;
@Input() citysList;
citySearchTag;
categorySearchTag;
  constructor() { }

  ngOnInit() {
  }
  setSearchParams(category,city ){
    if(city!==undefined)
      this.citySearchTag = city.value;
    console.log(this.citySearchTag);
    if(category!==undefined)
      this.categorySearchTag = category.value;
    console.log(this.categorySearchTag);
  }
}
