import { Component, OnInit } from '@angular/core';
import { Budget } from 'app/models/budget/budget';
import { Labo } from 'app/models/labo/labo';
import { User } from 'app/models/user/user';
import { BudgetService } from 'app/services/budgets/budget.service';
import { LaboService } from 'app/services/labo/labo.service';
import Chart from 'chart.js';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public list : Array<Budget>;
  public user : User = JSON.parse(localStorage.getItem("user"));
  public labo : Labo = new Labo();
  public sommedb : number = 0;
  public sommedr : number = 0;
  public membres : Array<User>;

  constructor(private budgetService : BudgetService, private laboService : LaboService) { }

  ngOnInit(): void {
    var datadb = [];
    var datadr = [];
    var years = [];
    this.laboService.listlabomembres(this.user.username).subscribe(data=>{
      this.membres = data;
      console.log(this.membres)
    },err=>{
      console.log(err)
    })
    this.laboService.getlabo(this.user.username).subscribe(data=>{
      this.labo = data;
      this.budgetService.labosbudgets(this.labo.nom).subscribe(dt=>{
        this.list = dt;
        this.list.forEach(l=>{
          this.sommedb = this.sommedb + l.db;
          this.sommedr = this.sommedr + l.dr;
          datadb.push(l.db);
          datadr.push(l.dr);
          years.push(l.annee.year);
        })

        console.log(datadb)


        var speedCanvas = document.getElementById("speedChart");

        var dataFirst = {
          data: datadr,
          fill: false,
          borderColor: '#fbc658',
          backgroundColor: 'transparent',
          pointBorderColor: '#fbc658',
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        };

        var dataSecond = {
          data: datadb,
          fill: false,
          borderColor: '#51CACF',
          backgroundColor: 'transparent',
          pointBorderColor: '#51CACF',
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8
        };

        var speedData = {
          labels: years,
          datasets: [dataFirst, dataSecond]
        };

        var chartOptions = {
          legend: {
            display: false,
            position: 'top'
          }
        };

        var lineChart = new Chart(speedCanvas, {
          type: 'line',
          hover: false,
          data: speedData,
          options: chartOptions
        });

      },error=>{
        console.log(error);

      })
    },err=>{
      console.log(err);
    })


    }
}
