import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges{
@Input() perPage;
@Input() itemsAmount;
pagesAmount;
@Input() currentPage;
numbers = new Array(this.pagesAmount);
@Input() category;
  constructor(private usersService:UsersService) { }

  ngOnInit() {
  	this.initItems(this.itemsAmount,this.perPage);
  }
  ngOnChanges(){
  	this.initItems(this.itemsAmount,this.perPage);
  }
  initItems(amount,onPage){
  	this.pagesAmount = Math.ceil(amount/onPage);
  	this.numbers=Array.from(Array(this.pagesAmount).keys());
  	this.numbers=this.numbers.map((value)=>value+=1);
  }

}
