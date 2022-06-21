import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labo } from 'app/models/labo/labo';
import { User } from 'app/models/user/user';
import { AccountService } from 'app/services/account/account.service';
import { LaboService } from 'app/services/labo/labo.service';

@Component({
  selector: 'app-newlabo',
  templateUrl: './newlabo.component.html',
  styleUrls: ['./newlabo.component.css']
})
export class NewlaboComponent implements OnInit {

  public user : User = new User();
  public labo : Labo = new Labo();
  authenticate : User = new User();

  constructor(private laboService : LaboService, private router : Router, private accountService : AccountService) { }

  ngOnInit(): void {

    this.authenticate = JSON.parse(localStorage.getItem("user"))

  }

  submit(){
    this.user.labo = this.labo;
    this.laboService.newlabo(this.user).subscribe(data=>{
      this.router.navigate(['/labos']);
    },err=>{
      console.log(err)
    })
  }

  create(){
    this.accountService.newuser(this.authenticate.username, this.user).subscribe(data=>{
      this.router.navigate(['/labos']);
    },err=>{
      console.log(err)
    })
  }

}
