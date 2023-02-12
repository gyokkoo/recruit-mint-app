import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobsModule } from '../jobs/jobs.module';
import { InterviewsModule } from '../interviews/interviews.module';

@NgModule({
   declarations: [DashboardHomeComponent],
   imports: [CommonModule, DashboardRoutingModule, SharedModule, JobsModule, InterviewsModule],
})
export class DashboardModule {}
