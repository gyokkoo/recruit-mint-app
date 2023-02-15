import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { JobListComponent } from './job-list/job-list.component';
import { JobListDetailsComponent } from './job-list-details/job-list-details.component';
import { JobApplyComponent } from './job-apply/job-apply.component';

@NgModule({
   imports: [CommonModule, JobsRoutingModule, SharedModule],
   declarations: [JobListComponent, JobListDetailsComponent, JobApplyComponent],
   exports: [JobListComponent],
})
export class JobsModule {}
