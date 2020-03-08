import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { tap } from 'rxjs/operators';
import { forkJoin  } from 'rxjs';
import { reduce } from 'rxjs/operators';
import { DataManipService } from '../data-manip.service';
import * as DataFormat from '../models/Chart-Data-Format'
import { Orders } from '../models/Orders';



@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
 


export class GeneralInfoComponent implements OnInit {
  public statePieChart: DataFormat.Pair[];
  public customerBarChart: DataFormat.Pair[];
  public ordersLineChart: DataFormat.Series[];
  public xAxisLabel: string;
  public yAxisLabel: string;

  constructor( private api: ApiService, private formatter : DataManipService ) { }

  public colorScheme={
    domain: [ '#92d892' , '#e29d9d' , '#d6c56c' , '#d4acd2' , '#e0a672' ,'#8ecee4' ]
  }
 

  ngOnInit(): void {
    forkJoin(
      this.api.getDataByState().pipe(
        tap( res=>{
          this.statePieChart = this.formatter.format( res , "pie" )
        })
      ),
      this.api.getDataByCustomer().pipe(
        tap( res=>{
          this.customerBarChart = this.formatter.format( res , "bar" );
        })
      ),
      this.api.getOrders( 1 , 50 ).pipe(
        tap( res=> {
          this.yAxisLabel = "Order Total";
          this.xAxisLabel = "Days";
          const data:Orders[]= res['page']['data'];
          let name:string= "Day";
          this.ordersLineChart = this.formatter.format( data , "area" , name )
        })
      )

    ).subscribe( () => this.welcomeAdmin() )
  }

 

  

  private welcomeAdmin(){
    // console.log( this.statePieChart );
    // console.log( this.customerBarChart );
  }



}
