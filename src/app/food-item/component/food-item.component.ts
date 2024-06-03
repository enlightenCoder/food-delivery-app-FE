import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItemService } from '../service/FoodItemService';
import { FoodcataloguePage } from '../../shared/model/FoodCataloguePage';
import { FoodItem } from '../../shared/model/FoodItem';


@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {

   restaurantId:number;
   foodCataloguePage:FoodcataloguePage;
   foodItemCart:FoodItem[] = [];
   orderSummary:FoodcataloguePage;

  constructor(private route:ActivatedRoute, private router:Router, private foodItemService:FoodItemService){}

  ngOnInit(){

    this.route.paramMap.subscribe(
                          param =>{
                            this.restaurantId = +param.get('id');
                          }
                        )

    this.foodItemService.fetchFoodAndRestaurantDetailsFromApi(this.restaurantId)
                        .subscribe(
                          data => {
                               console.log(data)
                              this.foodCataloguePage = data;
                          }
                        );
  }

  increment(food:FoodItem){
    
    food.quantity++;
    //check if the item already been added in cart
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    // it the item is not present in the cart then it will return -1
    if(index === -1){
      // if the item is not yet added in cart then do it
      this.foodItemCart.push(food);
    }else{
      //update the food object potentially the quantity
      this.foodItemCart[index] = food;
    }
    
  }



  decrement(food:FoodItem){
    food.quantity--;
    // check if item already in cart
    const index = this.foodItemCart.findIndex(item => item.id === food.id);

    if(this.foodItemCart[index].quantity == 0){
      //Remove item if quantity is zero  
      this.foodItemCart.splice(index,1);
    }else{  
      // if record exists update it in the array
      this.foodItemCart[index] = food;
    }
  
  }


  onCheckOut(){

    this.orderSummary = {
      foodItemList:[],
      restaurantDTO:null
    } 
    
    this.orderSummary.foodItemList = this.foodItemCart;
    this.orderSummary.restaurantDTO = this.foodCataloguePage.restaurantDTO;
    this.router.navigate(['/orderSummary'], {queryParams : {data : JSON.stringify(this.orderSummary)}});
  }

  
}
