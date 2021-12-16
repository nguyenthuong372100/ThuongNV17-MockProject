import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}

  getTotal() {
    return this.http.get(
      'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief'
    );
  }

  getListCase() {
    return this.http.get(
      'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest'
    );
  }

  getCaseByCountry(country: string) {
    return this.http.get(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${country}&onlyCountries=true`
    );
  }

}
