import { Component, OnInit, Input } from '@angular/core';
import * as DataFormat from '../../../models/Chart-Data-Format'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() scheme:any;
  @Input() results: DataFormat.Series[];
  @Input() xAxisLabel: string;
  @Input() yAxisLabel: string;
  constructor() { }

  ngOnInit(): void {
  }

}
