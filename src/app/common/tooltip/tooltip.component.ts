import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipComponent implements OnInit, OnChanges {
@Input() messageTitle;
@Input() messageText;
@Input() toolTipPosision;
  className;
  constructor() { }

  ngOnInit() {
  	this.className=this.getPosition(this.toolTipPosision);
  }
  ngOnChanges(){

  }
  getPosition(position){
/*  	console.log('postion:'+position);*/
  	let posClass;
  	switch(position)
  	{
  		case 'top-left':{posClass="top-before";break;}
  		case 'top-right':{posClass="top-after";break;}
  		case 'bottom-left':{posClass="bottom-before";break;}
  		case 'bottom-right':{posClass="bottom-after";break;}
  		default: {posClass="top-after";}
  	}
/*  	console.log('postion class :'+posClass);*/
  	return posClass;
  }
}
