import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { K8ExternalIp } from "../../constant/url";



@Injectable({
    providedIn:'root'
})
export class FoodItemService{

    private apiUrl = K8ExternalIp+'/foodCatalogue/fetchRestaurantAndFoodItems/';

    constructor(private http:HttpClient){}


    fetchFoodAndRestaurantDetailsFromApi(id:number):Observable<any>{
        return this.http.get<any>(`${this.apiUrl+id}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(error.message || error);
      }

}