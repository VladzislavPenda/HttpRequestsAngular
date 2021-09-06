import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog } from 'src/app/common/catalog';
import { DictCountryList } from 'src/app/common/countryList';
import { OwnedCatalog } from 'src/app/common/ownedCatalog';
import { CategoryHttpServiceService as CatalogHttpServiceService } from 'src/app/services/httpServices/categoryHttpService/category-http-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CatalogHttpServiceService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {
  public catalogData: Observable<Catalog[]> | undefined;
  public catal: Catalog[] | undefined;
  public ownedCatalogData: Observable<OwnedCatalog[]> | undefined;
  public show = false;

  constructor(private catalogService: CatalogHttpServiceService) {
   }

  ngOnInit(): void {
    this.loadCatalog();
    console.log("in");
    this.catalogData?.subscribe((data: any) => this.catal = data)

    console.log(this.catal);
    this.loadOwnedCatalog();
  }

  private loadCatalog() {
    this.catalogData = this.catalogService.getCategories();
    console.log(this.catalogData);
  }

  private loadOwnedCatalog() {
    this.ownedCatalogData = this.catalogService.getOwnedCategories();
  }

  public getParents(item: OwnedCatalog): OwnedCatalog[] {
    let parentsArray: OwnedCatalog[] = [item];
    let isLast = false;
    while(!isLast) {
      if (item.parent != undefined) {
        parentsArray.push(item.parent)
        item = item.parent;
      } else {
        isLast = true;
      }
    }

    parentsArray = parentsArray.reverse();
    return parentsArray;
  }
}
