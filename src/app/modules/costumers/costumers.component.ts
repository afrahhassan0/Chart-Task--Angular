import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Customers } from 'src/app/models/Customers';
import { Orders } from 'src/app/models/Orders';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrls: ['./costumers.component.css']
})
export class CostumersComponent implements OnInit {
  public customerData: Customers[] = [];
  public customerOrders: Orders[] = [];

  constructor( private api: ApiService , private currentRoute: ActivatedRoute ) {
    this.customerData = this.currentRoute.snapshot.data['customers']
  }


  ngOnInit(): void {
  }
  
  private resetDetail(){
    this.customerOrders.length = 0;
  }

  public getDetailsOfCustomer(id){
    this.resetDetail();
    this.api.getOrdersByCustomer(id).pipe(
      tap( orders => {
        this.customerOrders = orders;
      })
    ).subscribe();
  }
  
}

