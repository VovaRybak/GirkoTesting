import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MediaService {
	mediaUrl = "assets/media.json"
  constructor(private http:HttpClient) { }
 
 getMedia(){
  	return this.http.get(this.mediaUrl);
  }

}
