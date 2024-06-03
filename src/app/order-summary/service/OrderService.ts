import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL_Order } from "../../constant/url";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class OrderService{

    private apiUrl = API_URL_Order+'/order/saveOrder';

    constructor(private http:HttpClient){}

    httpOptions = {
        headers : new HttpHeaders({
            'Content-type' : 'text/plain',
            'Access-Control-Allow-Origin' : 'http://localhost:4200' // Replace with angular app url
        })
    };


    saveOrder(data:any):Observable<any>{
        return this.http.post<any>(this.apiUrl,data);
    }

}