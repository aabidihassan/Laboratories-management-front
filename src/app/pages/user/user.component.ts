import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user/user';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

  public user : User = new User();
    ngOnInit(){
      this.user = JSON.parse(localStorage.getItem("user"));
      console.log(this.user)
    }
}
