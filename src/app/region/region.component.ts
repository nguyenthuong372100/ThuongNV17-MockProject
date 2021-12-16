import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidService } from 'src/services/covid.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent implements OnInit {
  country: any = {};
  deathRate!: number;
  caseList: any = [];
  countryCode: string = 'VN';
  constructor(
    private service: CovidService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // get country detail
    this.service
      .getCaseByCountry(this.countryCode)
      .subscribe((response: any) => {
        this.country = response[0];
        this.deathRate =
          Math.round(
            (this.country.deaths / this.country.confirmed) * 100 * 100
          ) / 100;
      });

    // get list country for select
    this.service.getListCase().subscribe((response: any) => {
      this.caseList = response;
      this.caseList = [...new Set(this.caseList)];
    });
  }

  getSelect(event: any) {
    let index = this.caseList.findIndex(
      (element: any) => element.countryregion == event.target.value
    );
    this.router.navigate(['/region', event.target.value]);
    this.country = this.caseList[index];
    this.deathRate =
    Math.round(
      (this.country.deaths / this.country.confirmed) * 100 * 100
    ) / 100;
  }

  ngOnInit(): void {}
}
