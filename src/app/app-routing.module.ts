import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CountriesComponent } from './components/countries/countries.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path: "catalog", component: CategoriesComponent},
  {path: "test", component: TestComponent},
  {path: "countries", component: CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
