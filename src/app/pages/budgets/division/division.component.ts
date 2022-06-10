import { Component, OnInit } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { Labo } from 'app/models/labo/labo';
import { User } from 'app/models/user/user';
import { BpService } from 'app/services/budgetpersonnel/bp.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  public labos : Array<Labo>;
  public membres : Array<User>;
  user : User = JSON.parse(localStorage.getItem("user"));
  public annee = history.state.annee;
  public budget = history.state.budget;
  public max : number = 0;
  public input : number = 0;

  constructor(private bpService : BpService) { }

  ngOnInit(): void {
    this.bpService.getUsersWithBpByBudget(history.state.identifiant, this.user.username).subscribe(data=>{
      this.membres = data;
      this.membres.forEach(m=>{
        if(m.budgetPersonnels[0]!=null)
        this.max+=m.budgetPersonnels[0].montant;
      })
    },err=>{
      console.log(err);
    })
  }


}
