import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Orders } from 'src/app/models/Orders';
import { tap, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: Orders[];
  public pageNumber: number;
  public itemPerPage: number;
  public maxPages: number;


  constructor(private routeTo: Router , private currentRoute: ActivatedRoute , private api: ApiService) { }

  ngOnInit(): void {
    this.currentRoute.paramMap.pipe(
      switchMap( res =>{
        this.pageNumber = parseInt(res.get('number'));
        this.itemPerPage = parseInt(res.get('size'))
        return this.api.getOrders( this.pageNumber , this.itemPerPage )
      })
    ).subscribe( res=>{
      this.maxPages = res.totalPages;
      this.orders = res['page']['data'];
      console.log( this.orders )
    })  
  }

  public updatePage(pageNumber){
    this.routeTo.navigate( [ '/order/'+pageNumber+"/"+this.itemPerPage ] )
  }
}
