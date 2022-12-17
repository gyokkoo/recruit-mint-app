import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersModule } from '../jobs/customers.module';

@NgModule({
   declarations: [DashboardHomeComponent],
   imports: [CommonModule, DashboardRoutingModule, SharedModule, CustomersModule],
})
export class DashboardModule {}
