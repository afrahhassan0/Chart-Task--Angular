import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostumersComponent } from './costumers.component';
import { CustumerResolverService } from './custumer-resolver.service';

const routes: Routes = [
  { 
    path: '', 
    component: CostumersComponent,
    resolve: { customers: CustumerResolverService }
  },
  { path: '**' , redirectTo: "" , pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostumersRoutingModule { }
