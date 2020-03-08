import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Customers } from 'src/app/models/Customers';
import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustumerResolverService implements Resolve<Customers[]> {

  constructor(private api: ApiService) { }

  resolve ( route: ActivatedRouteSnapshot , state: RouterStateSnapshot ): Observable<Customers[]>{
    return this.api.getCustomers().pipe(
      catchError(()=> {
        return empty();
      } )
    )
  }
}
