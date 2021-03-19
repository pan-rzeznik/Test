import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.scss']
})
export class CreateAccountsComponent implements OnInit {



  
  constructor() { }

  ngOnInit(): void {
  }

 @Input()
boxColor;

@Input()
placeholderText;

@Output()
inputEvent = new EventEmitter

@Input()
cos='s';

addUser(s){
  if(s.value.length>0){
  // alert(s.value)
  this.inputEvent.emit(s.value)
  }
}

clearField(){
   this.cos= ' '
}

}