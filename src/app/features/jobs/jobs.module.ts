import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { JobListComponent } from './job-list/job-list.component';
import { JobListDetailsComponent } from './job-list-details/job-list-details.component';

@NgModule({
   imports: [CommonModule, JobsRoutingModule, SharedModule],
   declarations: [JobListComponent, JobListDetailsComponent],
   exports: [JobListComponent],
})
export class JobsModule {}
