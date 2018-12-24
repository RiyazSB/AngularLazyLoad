import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListComponent } from './order-list/order-list.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  },
  {
    path: 'my',
    component: MyOrdersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderListComponent, MyOrdersComponent]
})
export class OrdersModule { }
