import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Catalog } from 'src/app/common/catalog';

@Injectable()
export class CategoryHttpServiceService {
  private categoryUrlString: string = "/api/catalog/owned?nodeId=cbb2feff-6edc-5146-b0a8-1bf4513d8f49"
  private categoryUrlStringForManyNodes = "/api/catalog/owned?nodeId=d6827c7a-511f-5d14-97f3-760c9eebd241&nodeId=23439ed2-c9da-5999-bc78-b3d3fa545b81&nodeId=d64b644d-db71-59ec-a3cb-0ae5b73fa062"
  private dictCountryUrl: string = "/api/dictionary/country"
  private subject?: BehaviorSubject<Catalog>;
  public catalog?: Observable<Catalog> = this.subject?.asObservable();

  constructor(private http: HttpClient) { }

  getCountries(): any{
    return this.http.get(this.dictCountryUrl);
  }

  getCategories(): Observable<Catalog[]>{
    // this.subject?.next(this.http.get<Catalog>(this.categoryUrlString).subscribe((data: any) => {}))
    return this.http.get<Catalog[]>(this.categoryUrlStringForManyNodes);
  }
}
