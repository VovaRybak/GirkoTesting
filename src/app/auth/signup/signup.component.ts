import {Component, OnChanges, OnInit,ViewChild,ElementRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit,OnChanges {
userRePassword;
userPassword;
userEmail;
rePassValid;

  constructor() { }
  ngOnChanges(){
  }
  ngOnInit() {
  }

}
