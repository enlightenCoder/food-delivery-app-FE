import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodItemRoutingModule } from './food-item-routing.module';
import { FoodItemComponent } from './component/food-item.component';


@NgModule({
  declarations: [
    FoodItemComponent
  ],
  imports: [
    CommonModule,
    FoodItemRoutingModule
  ]
})
export class FoodItemModule { }
