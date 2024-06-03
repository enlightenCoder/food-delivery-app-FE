import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemComponent } from './component/food-item.component';

const routes: Routes = [
  {path:'food-item/:id',component:FoodItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodItemRoutingModule { }
