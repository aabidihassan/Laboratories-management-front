import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annee } from 'app/models/annee/annee';
import { Budget } from 'app/models/budget/budget';
import { Labo } from 'app/models/labo/labo';
import { User } from 'app/models/user/user';
import { AnneeService } from 'app/services/annee/annee.service';
import { BudgetService } from 'app/services/budgets/budget.service';
import { LaboService } from 'app/services/labo/labo.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public budget : Budget = new Budget();
  public annee : Annee = new Annee();
  public user : User = JSON.parse(localStorage.getItem("user"));
  public labo : Labo = new Labo();
  public annees : Array<Annee>;

  constructor(private router : Router ,private budgetService : BudgetService, private laboService : LaboService, private anneeService : AnneeService) { }

  ngOnInit(): void {
    this.laboService.getlabo(this.user.username).subscribe(data=>{
      this.labo = data;
    },err=>{
      console.log(err);
    })
    this.anneeService.getYears().subscribe(data=>{
      this.annees = data;
    },err=>{
      console.log(err);
    })
  }

  submit(){
    this.budget.labo = this.labo;
    this.budget.annee = this.annee;
    this.budgetService.newbudget(this.labo.nom, this.budget).subscribe(data=>{
      if(data!=null) {
        alert("Budget bien ajoute");
        this.router.navigate(['/budgets'])
      }else
      alert("Un budget est deja existe pour cette annee")

    },err=>{
      console.log(err);
    })
  }

}
