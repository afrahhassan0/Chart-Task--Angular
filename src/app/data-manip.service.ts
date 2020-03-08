import { Injectable } from '@angular/core';
import * as DataFormat from './models/Chart-Data-Format';
import { GroupedOrdersByState } from './models/Grouped-orders-by-state';
import { GroupedOrdersByCustomers } from './models/Grouped-orders-by-customers';
import { Orders } from './models/Orders';

@Injectable({
  providedIn: 'root'
})
export class DataManipService {

  constructor() { }

  public format( toFormat, chartType: "bar" | "pie" | "area" , name?: string){
      let formattedData;
      switch (chartType){
        case "pie":
          formattedData = this.pieFormat( toFormat );
        break;
        case "bar":
          formattedData = this.barFormat( toFormat );
        break;
        case "area":{
          formattedData = this.lineFormat( toFormat , name );
        }

      }
      return formattedData;
  }

    private pieFormat(toFormat:GroupedOrdersByState[]): DataFormat.Pair[]{
      const data: DataFormat.Pair[] = [];
      toFormat.forEach(  (item) => {
        let formatted:DataFormat.Pair = {
          name: item.state,
          value: item.total
        }
        data.push(formatted);        
      })
      return data;
  }
  private barFormat(toFormat:GroupedOrdersByCustomers[]): DataFormat.Pair[]{
    const data: DataFormat.Pair[] = [];
    toFormat.forEach(  (item) => {
      let formatted:DataFormat.Pair = {
        name: item.name,
        value: item.total
      }
      data.push(formatted);        
    })
    return data;
} 

  private lineFormat ( toFormat:Orders[]  , names: string){
    
    //totals is an array of date/total pairs
    const totals = toFormat.reduce( ( r , e )=> {
      r.push( [ this.formatDate(e.placed), e.total] );
      return r;
    }, [] );

    //format is an array that adds the total for every date in totals
    const format = this.cumulated( totals );
    
    return this.chartFormat(format , names);
  }

  private formatDate( date ): string{
    let fullDate = new Date(date);

    let day = fullDate.getUTCDate().toString();
    let month = ( fullDate.getUTCMonth() +1 ).toString(); //months start with 0
    let year = fullDate.getUTCFullYear().toString();

    return day+"/"+month+"/"+year
  }

  private cumulated( data: any[] ){
    //initialization: first element to compare to
    const firstElement = data.shift();
    let currentDate = firstElement[0];
    let total = firstElement[1];

    let formattedResult = [];
    data.forEach( record=>{  //record[0] is the date , record[1] is the corresponding total
      if( record[0] == currentDate ){
        total+= record[1];
      }
      else{
        formattedResult.push( [ currentDate , total ] );
        currentDate = record[0]; 
        total = record[1];
      }
    })
    return formattedResult;
  }
  
  private chartFormat( toFormat , chartName: string ):DataFormat.Series[]{
      let dataPaires: DataFormat.Pair[] = new Array<DataFormat.Pair>();
      toFormat.forEach( res =>{
        let pair: DataFormat.Pair = {
          name: res[0], //the date
          value: res[1] //the corresponding total
        }
        dataPaires.push(pair);
      })

      return [
        {
          name: chartName,
          series: dataPaires
        }
      ]
  }

}
