import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";

export interface OrderDto {
    
    foodItemList?:FoodItem[];
    restaurantDTO:Restaurant;
    userId?:number;
    
}