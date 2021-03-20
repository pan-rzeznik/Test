import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.scss']
})
export class CreateAccountsComponent  {

 @Input()
boxColor;

@Input()
placeholderText;

@Output()
inputEvent = new EventEmitter

@Input()
valueAccount='sd';

addUser(s){
  if(s.value.length>0){
  // alert(s.value)
  this.inputEvent.emit(s.value)
  }

  this.clearField();
}

private clearField(){
   this.valueAccount= ' '
   console.warn("dasda")
}

}