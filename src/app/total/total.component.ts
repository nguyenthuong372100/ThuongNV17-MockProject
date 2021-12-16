import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/services/covid.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  total:any;
  deathRate!:number;
  constructor(private service: CovidService) { 
    this.service.getTotal().subscribe((response:any)=>{
      this.total = response;
      this.deathRate = Math.round(( response.deaths / response.confirmed *100) * 100) / 100  ;
      console.log(this.deathRate);
    });
  }

  ngOnInit(): void {
  }

}
