import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidService } from 'src/services/covid.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent implements OnInit {
  country: any;
  deathRate!: number;
  caseList: any;
  constructor(private service: CovidService, private router: Router, private route: ActivatedRoute) {
    // get country detail
    this.service.getCaseByCountry('US').subscribe((response: any) => {
      this.country = response[0];
      this.deathRate =
        Math.round((this.country.deaths / this.country.confirmed) * 100 * 100) /
        100;
    });

    // get list country for select
    this.service.getListCase().subscribe((response: any) => {
      this.caseList = response;
    });

    // lay lai du lieu cho country khi doi param
    // this.route.paramMap.subscribe((params)=>{
    //   this.country = params.get('country');
    //   alert(this.country);
    // });
  
  }

  getSelect(event: any) {
    this.router.navigate(['/region',event.target.value]);
    this.service.getCaseByCountry(event.target.value).subscribe((response: any) => {
      this.country = response[0];
    });
  }

  ngOnInit(): void {}
}
