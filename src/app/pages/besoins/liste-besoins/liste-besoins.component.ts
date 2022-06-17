import { Component, OnInit } from '@angular/core';
import { Besoin } from 'app/models/besoins/besoin';
import { BesoinsService } from 'app/services/besoins/besoins.service';

@Component({
  selector: 'app-liste-besoins',
  templateUrl: './liste-besoins.component.html',
  styleUrls: ['./liste-besoins.component.css']
})
export class ListeBesoinsComponent implements OnInit {

  public besoins:Array<Besoin>;

  constructor(private besoinService : BesoinsService) { }

  ngOnInit(): void {
    this.besoinService.besoinbybp(Number(history.state.budget)).subscribe(data=>{
      this.besoins = data;
      console.table(this.besoins)
    },err=>{
      console.log(err)
    })
  }

}
