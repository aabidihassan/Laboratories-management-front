import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Besoin } from 'app/models/besoins/besoin';
import { BudgetPersonnel } from 'app/models/budgetpersonnel/budget-personnel';
import { TypeBesoin } from 'app/models/typeBesoin/type-besoin';
import { BesoinsService } from 'app/services/besoins/besoins.service';
import { ProfileService } from 'app/services/profile/profile.service';
import { TypeBesoinService } from 'app/services/typeBesoins/type-besoin.service';

@Component({
  selector: 'app-new-besoin',
  templateUrl: './new-besoin.component.html',
  styleUrls: ['./new-besoin.component.css']
})
export class NewBesoinComponent implements OnInit {

  public besoin:Besoin = new Besoin();
  public types:Array<TypeBesoin>;
  public type : TypeBesoin = new TypeBesoin();
  public consom:number = 0;
  public montant : number = Number(history.state.montant);

  constructor(private typeService : TypeBesoinService, private besoinService : BesoinsService, private router : Router, private profile : ProfileService) { }

  ngOnInit(): void {
    this.besoinService.besoinbybp(history.state.budget).subscribe(data=>{
      console.log(data)
      data.forEach(element => {
        this.consom+=element.montant;
      });
    },err=>{
      console.log(err)
    })
    this.typeService.gettypes().subscribe(data=>{
      this.types = data;
    },err=>{
      console.log(err)
    })
  }

  submit(){
    if(this.besoin.montant<=(this.montant-this.consom)){
      this.besoin.typeBesoin = this.type;
      this.besoin.utilisateur = JSON.parse(localStorage.getItem("user"))
      const bp:BudgetPersonnel = new BudgetPersonnel();
      bp.id_budget_personnel = Number(history.state.budget);

      this.besoin.pudgetPersonnel = bp;
      this.besoinService.save(this.besoin).subscribe(data=>{
        alert("Le besoin est bien ajoute");
        this.profile.profile().subscribe(data=>{
          localStorage.setItem("user", JSON.stringify(data));
          this.router.navigate(['/budgetspersonnel/besoins'],  { state: { budget : history.state.budget } })
        },err=>{
          console.log(err)
        })

      }, err=>{
        alert("Besoin n'a pas ete ajoute")
      })
    }else{
      alert("Montant depasse!!")
    }

  }

}
