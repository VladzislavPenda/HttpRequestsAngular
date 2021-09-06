import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog } from 'src/app/common/catalog';
import { DictCountryList } from 'src/app/common/countryList';
import { CategoryHttpServiceService as CatalogHttpServiceService } from 'src/app/services/httpServices/categoryHttpService/category-http-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CatalogHttpServiceService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {
  public data: Observable<Catalog[]> | undefined;
  public catalogData: Catalog | undefined;

  constructor(private catalogService: CatalogHttpServiceService, private cd: ChangeDetectorRef) {
   }

  ngOnInit(): void {
    // this.loadCategories();
    this.loadCategoriesAsObservable();
  }

  func() {
    console.log(this.data);
  }

  private loadCategories() {
    this.catalogService.getCategories().subscribe((data: any) => {
      this.catalogData = data;
      // console.log(this.catalogData);
    })
    this.cd.reattach();
  }

  private loadCategoriesAsObservable() {
    this.data = this.catalogService.getCategories();
    console.log(this.data);
  }

  public getChilds(item: Catalog): Catalog[] {
    let parentsArray: Catalog[] = [item];
    let isLast = false;
    while(!isLast) {
      if (item.parent != undefined) {
        parentsArray.push(item.parent)
        item = item.parent;
      } else {
        isLast = true;
      }
    }

    console.log(parentsArray);
    parentsArray = parentsArray.reverse();
    return parentsArray;
  }

}
