import { Component, OnInit } from '@angular/core';
import { DictCountryList } from 'src/app/common/countryList';
import { CategoryHttpServiceService } from 'src/app/services/httpServices/categoryHttpService/category-http-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [CategoryHttpServiceService]
})
export class CountriesComponent {
  public countries?: DictCountryList[];

  constructor(private httpService: CategoryHttpServiceService) {
    this.loadCountries();
  }

  private loadCountries() {
    this.httpService.getCountries().subscribe((data: DictCountryList[]) => {
      this.countries = data;
    });
  }
}
