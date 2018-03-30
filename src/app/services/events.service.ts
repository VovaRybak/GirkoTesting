import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsService {
  eventsUrl = "assets/events.json"
  constructor(private http:HttpClient) { }

  getEvents(){
    return this.http.get(this.eventsUrl);
  }

}
