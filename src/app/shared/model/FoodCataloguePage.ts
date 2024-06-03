import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";



export interface FoodcataloguePage {

    foodItemList:FoodItem[];
    restaurantDTO:Restaurant;
    
}