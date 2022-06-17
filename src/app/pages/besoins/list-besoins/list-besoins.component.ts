import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetPersonnel } from 'app/models/budgetpersonnel/budget-personnel';
import { User } from 'app/models/user/user';
import { BpService } from 'app/services/budgetpersonnel/bp.service';
import { data } from 'jquery';

@Component({
  selector: 'app-list-besoins',
  templateUrl: './list-besoins.component.html',
  styleUrls: ['./list-besoins.component.css']
})
export class ListBesoinsComponent implements OnInit {

  public user : User = JSON.parse(localStorage.getItem("user"));
  public bp:Array<BudgetPersonnel>;

  constructor(private bpService : BpService, private router : Router) { }

  ngOnInit(): void {
    this.bpService.getUserBp(this.user.username).subscribe(data=>{
      this.bp = data;
    },err=>{
      console.log(err);
    })
  }

  lister(id:number){
    this.router.navigate(['/budgetspersonnel/besoins/'], { state: { budget : id } });
  }

  new(id : number, montant : number){
    this.router.navigate(['/budgetspersonnel/besoins/new'], { state: { budget : id , montant : montant} });
  }

}
