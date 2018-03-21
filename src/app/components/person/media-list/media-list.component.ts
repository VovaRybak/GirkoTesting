import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit, OnChanges {
@Input() imageSrc;
sliderCurImg;
sliderCurImgNumber;
numbers;
images = [];
sliderVisible = false;
  constructor() { }

  ngOnInit() {
  	this.numbers=Array.from(Array(24).keys());
  	for(let i=0;i<this.numbers.length;i++)
  	{
  		this.images.push("imageSrc");
  	}
  }
  ngOnChanges(){
  	
/*  }
  showSlider(i){
  	this.sliderCurImgNumber = i;
  	this.sliderCurImg = this.images[i];
  	this.sliderVisible = true;
  }
  hideSlider(){
  	this.sliderVisible = false;
  }
*/

}
