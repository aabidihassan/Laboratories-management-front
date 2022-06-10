import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labo } from 'app/models/labo/labo';
import { User } from 'app/models/user/user';
import { LaboService } from 'app/services/labo/labo.service';
import { data } from 'jquery';

@Component({
  selector: 'app-listelabos',
  templateUrl: './listelabos.component.html',
  styleUrls: ['./listelabos.component.css']
})
export class ListelabosComponent implements OnInit {

  public labos : Array<Labo>;
  public membres : Array<User>;
  user : User = new User();

  constructor(private laboService : LaboService, private router : Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    switch(this.user.roles[0].libelle){
      case 'ADMIN':
        this.laboService.listlabos().subscribe(data=>{
          this.labos = data;
          console.log(this.labos)
        },err=>{
          console.log(err)
        })
        break;

      case 'RESPO':
        this.laboService.listlabomembres(this.user.username).subscribe(data=>{
          this.membres = data;
        },err=>{
          console.log(err)
        })
        break;

      default:
        this.router.navigate(['/user'])
    }

  }

}
