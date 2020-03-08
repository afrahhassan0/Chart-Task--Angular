import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralInfoComponent } from './general-info/general-info.component';


const routes: Routes = [
  { path: "" , redirectTo:"general" , pathMatch:"full" },
  { path:"general" , component: GeneralInfoComponent },
  { path: 'customer', loadChildren: () => import('./modules/costumers/costumers.module').then(m => m.CostumersModule) },
  { path: 'order', loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'shipper', loadChildren: () => import('./modules/shippers/shippers.module').then(m => m.ShippersModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
