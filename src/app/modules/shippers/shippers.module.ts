import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippersRoutingModule } from './shippers-routing.module';
import { ShippersComponent } from './shippers.component';


@NgModule({
  declarations: [ShippersComponent],
  imports: [
    CommonModule,
    ShippersRoutingModule
  ]
})
export class ShippersModule { }
