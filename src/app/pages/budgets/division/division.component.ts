import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Budget } from 'app/models/budget/budget';
import { BudgetPersonnel } from 'app/models/budgetpersonnel/budget-personnel';
import { Labo } from 'app/models/labo/labo';
import { User } from 'app/models/user/user';
import { BpService } from 'app/services/budgetpersonnel/bp.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  public labos : Array<Labo>;
  public membres : Array<User>;
  user : User = JSON.parse(localStorage.getItem("user"));
  public budget : Budget = history.state.budget;
  public max : number = 0;
  private int : number = 0;

  constructor(private bpService : BpService, private router : Router) { }

  ngOnInit(): void {
    console.log(this.budget)
    this.bpService.getUsersWithBpByBudget(this.budget.id_budget, this.user.username).subscribe(data=>{
      this.membres = data;
      this.membres.forEach(m=>{
        if(m.budgetPersonnels[0]!=null)
        this.max+=m.budgetPersonnels[0].montant;
      })
    },err=>{
      console.log(err);
    })
  }

  affect(id:number = 0, user : User, mont : number){
    if(user.budgetPersonnels[0]!=null){
      this.int = Number(mont) - user.budgetPersonnels[0].montant;
    }else {
      this.int = mont;
    }
    if(this.int<= (this.budget.dr - this.max)){
      const budg:BudgetPersonnel = new BudgetPersonnel();
      const utilisateur : User = new User();
      utilisateur.username = user.username;

      const b : Budget = new Budget();
      b.id_budget = this.budget.id_budget;
      budg.id_budget_personnel = id;
      budg.utilisateur = utilisateur;
      budg.montant = Number(mont)
      budg.budget = b;
      console.log(budg)
      this.bpService.newBudgetPersonnel(budg).subscribe(data=>{
        alert("Montant bien effectuer")
        this.max+=Number(this.int);
      },err=>{
        console.log(err)
      })
    }else{
      alert("Vous avez depasse la limite \nLe montant max est : "+ (this.budget.dr - this.max))
    }

  }


}
