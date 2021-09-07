import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Catalog } from 'src/app/common/catalog';
import { OwnedCatalog } from 'src/app/common/ownedCatalog';

@Injectable()
export class CategoryHttpServiceService {
  private apiCatalogUrl = "/api/catalog"
  private categoryUrlString: string = "/api/catalog/owned?nodeId=cbb2feff-6edc-5146-b0a8-1bf4513d8f49"
  private categoryUrlStringForManyNodes = "/api/catalog/owned?nodeId=d6827c7a-511f-5d14-97f3-760c9eebd241&nodeId=23439ed2-c9da-5999-bc78-b3d3fa545b81&nodeId=d64b644d-db71-59ec-a3cb-0ae5b73fa062"
  private dictCountryUrl: string = "/api/dictionary/country"
  private subject?: BehaviorSubject<Catalog>;
  public catalog?: Observable<Catalog> = this.subject?.asObservable();

  constructor(private http: HttpClient) { }

  public getCountries(): any{
    return this.http.get(this.dictCountryUrl);
  }

  public getCategories(): Observable<Catalog[]>{
    return this.http.get<Catalog[]>(this.apiCatalogUrl);
  }

  public getOwnedCategories(): Observable<OwnedCatalog[]> {
    return this.http.get<OwnedCatalog[]>(this.categoryUrlStringForManyNodes)
  }
}
