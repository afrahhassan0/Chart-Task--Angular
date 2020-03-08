import { Component, OnInit, Input } from '@angular/core';
import * as DataFormat from 'src/app/models/Chart-Data-Format';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() colorScheme:any;
  @Input() pieChartData: DataFormat.Pair[];
  
  constructor() {}

  ngOnInit(): void {
  }

  onSelect(data):void{
    console.log(data);
  }

}
