import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { K8ExternalIp } from "../../constant/url";


@Injectable({
    providedIn:'root'
})
export class OrderService{

    private apiUrl = K8ExternalIp+'/order/saveOrder';

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