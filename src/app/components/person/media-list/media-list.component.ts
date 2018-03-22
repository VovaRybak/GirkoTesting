import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { MediaService } from '../../../services/media.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit,OnChanges {
@Input() toShow;
@Input() userId;
linkToLoc;
numbers;
images = [];
videos = [];
currArray=[];
currentPage;
perPage = 36;
amountItems;
  constructor(
              private mediaService:MediaService, 
              private route: ActivatedRoute
            ) { }

  ngOnInit() {     
     
  	
  }
  ngOnChanges(){
    this.route.queryParams
        .subscribe(params => {       
          this.getMedia(params);
                 
        });
  }
  getMedia(params){
    const userId = this.route.snapshot.paramMap.get('id');
    this.mediaService.getMedia()
     .subscribe((media)=>{
          let unsortedArray = media;
          this.filterArray(unsortedArray);
          this.linkToLoc='../../person/'+this.userId; 
          console.log(this.linkToLoc);
          this.chooseForPage(params.page,this.perPage);
        })
  }
  chooseForPage(page=1,onPage){
    this.currentPage = page;
    let startIndex = (page*onPage)-onPage;
    this.currArray = this.currArray.slice(startIndex,startIndex+onPage);
  }
  filterArray(array){
    this.images = array.filter((value)=>value['mediaType']==='photo');
    this.videos = array.filter((value)=>value['mediaType']==='video');
    this.currArray = this.toShow==='photo'?this.images:this.videos;
    this.amountItems = this.images.length;
  }
}
