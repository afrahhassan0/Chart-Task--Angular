import { Component, OnInit, Input } from '@angular/core';
import * as DataFormat from 'src/app/models/Chart-Data-Format';

@Component({
  selector: 'app-vertical-chart',
  templateUrl: './vertical-chart.component.html',
  styleUrls: ['./vertical-chart.component.css']
})
export class VerticalChartComponent implements OnInit {
  @Input() colorScheme:any;
  @Input() verticalChartData: DataFormat.Pair[];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data):void{
    console.log(data);
  }

}
