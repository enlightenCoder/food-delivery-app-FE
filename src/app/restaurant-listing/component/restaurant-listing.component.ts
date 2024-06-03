import { Component } from '@angular/core';
import { RestaurantService } from '../service/RestaurantService';
import { Router } from '@angular/router';
import { Restaurant } from '../../shared/model/Restaurant';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css'
})
export class RestaurantListingComponent {

  public restaurantList:Restaurant[];

  ngOnInit():void{
     
    this.fetchRestaurants();

  }

  constructor(private restaurantService:RestaurantService, private router:Router){}

  
  fetchRestaurants():void{
      
    this.restaurantService.getAllRestaurantsFromApi()
      .subscribe(
        data => {
          console.log(data);
          this.restaurantList = data;
          this.restaurantList?.forEach(restaurant=>{
            this.generateRandomRatings(restaurant)
          });
        }
      );
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomImage():string{
    const imageCount = 10; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpeg`; // Replace with your image filename pattern
  }

  orderNow(id:number):void{
    console.log("Restaurant Id : " + id);
    this.router.navigate(['/food-item',id]);
  }

  generateRandomRatings(restaurant : any){
    const ratings = Math.floor( (Math.random()*5) + 1 );
    console.log(restaurant.stars)
    restaurant.stars = Array(ratings).fill(0).map((value,index)=>index);
  }

}
