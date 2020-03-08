import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GroupedOrdersByState } from './models/grouped-orders-by-state';
import { GroupedOrdersByCustomers } from './models/Grouped-orders-by-customers';
import { Customers } from './models/Customers';
import { Shippers } from './models/Shippers';
import { Orders } from './models/Orders';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private rootUrl = "http://localhost:5000/api/";

  constructor( private http: HttpClient ) { }

  public getDataByState():Observable<GroupedOrdersByState[]>{
    const url = this.rootUrl + "order/bystate";
      return this.http.get<GroupedOrdersByState[]>( url ).pipe(
        catchError ( () => throwError("Error in retreaving data") )
      )
  }

  public getDataByCustomer():Observable<GroupedOrdersByCustomers[]>{
    const url = this.rootUrl + "order/bycustomer";
    return this.http.get<GroupedOrdersByCustomers[]>( url ).pipe(
      catchError( (err)=> throwError (err))
    )
  }

  public getOrders( pageNumber: number , pageSize: number ):Observable<any>{
    const url = this.rootUrl +"order/" + pageNumber +"/"+pageSize;
    return this.http.get( url ).pipe(
      catchError( (err) => throwError(err) )
    )
  }

  public getCustomers():Observable<Customers[]>{
    const url = this.rootUrl + "customer";
    return this.http.get<Customers[]>(url).pipe(
      catchError( (err) => throwError(err) )
    )
  }

  public getShippers():Observable<Shippers[]>{
    const url = this.rootUrl + "shipper";
    return this.http.get<Shippers[]>(url).pipe(
      catchError( (err) => throwError(err) )
    )
  }

  public getOrdersByCustomer( id:number ):Observable<Orders[]>{
    const url = this.rootUrl  + "order/costumer/" + id;
    console.log(url);
    return this.http.get<Orders[]>(url).pipe(
      catchError( (err) => throwError(err) )
    );
  }


}
