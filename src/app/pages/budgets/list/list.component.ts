import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Budget } from 'app/models/budget/budget';
import { Labo } from 'app/models/labo/labo';
import { User } from 'app/models/user/user';
import { BudgetService } from 'app/services/budgets/budget.service';
import { LaboService } from 'app/services/labo/labo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list : Array<Budget>;
  public user : User = JSON.parse(localStorage.getItem("user"));
  public labo : Labo = new Labo();

  constructor(private router : Router ,private budgetService : BudgetService, private laboService : LaboService) { }

  ngOnInit(): void {
    this.laboService.getlabo(this.user.username).subscribe(data=>{
      this.labo = data;
      this.budgetService.labosbudgets(this.labo.nom).subscribe(dt=>{
        this.list = dt;
        console.log(this.list)
      },error=>{
        console.log(error);

      })
    },err=>{
      console.log(err);
    })

  }

  diviser(id : number, year : number, br : number){

    this.router.navigate(['/budgets/division'], { state: { identifiant: id ,  annee : year , budget : br} });

  }

}
