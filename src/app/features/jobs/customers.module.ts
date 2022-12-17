import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { JobListComponent } from './job-list/job-list.component';

@NgModule({
   imports: [CommonModule, CustomersRoutingModule, SharedModule],
   declarations: [JobListComponent],
   exports: [JobListComponent],
})
export class CustomersModule {}
