import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { K8ExternalIp } from "../../constant/url";


@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    private apiUrl:string = K8ExternalIp+'/restaurant/fetchAllRestaurants';

    // constructor Injection
    constructor(private http : HttpClient){}

    getAllRestaurantsFromApi() : Observable<any> {
        return this.http.get<any>(`${this.apiUrl}`)
                        .pipe(
                            catchError(this.handleError)
                        );
    }

    private handleError(error: any) {
      console.error('An error occurred:', error);
      return throwError(error.message || error);
    }

}

