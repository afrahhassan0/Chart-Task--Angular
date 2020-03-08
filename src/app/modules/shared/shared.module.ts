import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { VerticalChartComponent } from './vertical-chart/vertical-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';



@NgModule({
  declarations: [
    PieChartComponent,
    VerticalChartComponent,
    LineChartComponent,
    ToggleButtonComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
  ],
  exports:[
    PieChartComponent,
    VerticalChartComponent,
    LineChartComponent
  ]
})
export class SharedModule { }
