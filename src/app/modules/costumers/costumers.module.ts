import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostumersRoutingModule } from './costumers-routing.module';
import { CostumersComponent } from './costumers.component';
import { PanelComponent } from './panel/panel.component';
import { AccordeonComponent } from './accordeon/accordeon.component';


@NgModule({
  declarations: [CostumersComponent, PanelComponent, AccordeonComponent],
  imports: [
    CommonModule,
    CostumersRoutingModule
  ]
})
export class CostumersModule { }
