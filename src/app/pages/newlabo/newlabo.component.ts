import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labo } from 'app/models/labo/labo';
import { User } from 'app/models/user/user';
import { LaboService } from 'app/services/labo/labo.service';

@Component({
  selector: 'app-newlabo',
  templateUrl: './newlabo.component.html',
  styleUrls: ['./newlabo.component.css']
})
export class NewlaboComponent implements OnInit {

  public user : User = new User();
  public labo : Labo = new Labo();

  constructor(private laboService : LaboService, private router : Router) { }

  ngOnInit(): void {

  }

  submit(){
    this.user.labo = this.labo;
    this.laboService.newlabo(this.user).subscribe(data=>{
      this.router.navigate(['/dashboard']);
    },err=>{
      console.log(err)
    })
  }

}
