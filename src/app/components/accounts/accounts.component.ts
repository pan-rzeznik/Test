import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  count: any;
  users =[];
  admins =[];

  pushUsers(data){
    if((!this.users.includes(data)) && (!this.admins.includes(data))){
      return this.users.push(data);
    }else{
      alert("Użytkownik o takiej nazwie już istnieje")
    }
  }

  removeItemUsers(itemIndex: number){
    this.users.splice(itemIndex,1)

  }

  upgrade(data){

    if(!this.admins.includes(data)){
      this.users.splice(data,1);
      this.admins.push(data)
    }
  }


  pushAdmins(data){
    if((!this.users.includes(data)) && (!this.admins.includes(data))){
      return this.admins.push(data);
    }else{
      alert("Użytkownik o takiej nazwie już istnieje")
    }
  }
 
  removeItemAdmins(itemIndex: number){
    this.admins.splice(itemIndex,1)

  }

  degrade(data){

    if(!this.users.includes(data)){
      this.admins.splice(data,1);
      this.users.push(data)
    }
  }


 

}


