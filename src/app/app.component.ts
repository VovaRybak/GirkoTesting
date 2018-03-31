import { Component, OnInit,OnDestroy} from '@angular/core';
import { SetLoginService} from './services/set-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  constructor(private setLogin:SetLoginService){}
  ngOnInit(){

  }
  ngOnDestroy(){

  }
}
