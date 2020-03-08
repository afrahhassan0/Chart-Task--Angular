import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: ':number/:size', component: OrdersComponent },
  { path: "" , redirectTo: '1/9' , pathMatch:"full" },
  { path: "**" , redirectTo: '1/9' , pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
