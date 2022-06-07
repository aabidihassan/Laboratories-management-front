import { Component, OnInit } from '@angular/core';
import { Labo } from 'app/models/labo/labo';
import { LaboService } from 'app/services/labo/labo.service';
import { data } from 'jquery';

@Component({
  selector: 'app-listelabos',
  templateUrl: './listelabos.component.html',
  styleUrls: ['./listelabos.component.css']
})
export class ListelabosComponent implements OnInit {

  public labos : Array<Labo>;

  constructor(private laboService : LaboService) { }

  ngOnInit(): void {
    this.laboService.listlabos().subscribe(data=>{
      this.labos = data;
      console.log(this.labos)
    },err=>{
      console.log(err)
    })
  }

}
