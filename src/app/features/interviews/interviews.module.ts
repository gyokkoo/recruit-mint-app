import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { InterviewsListComponent } from './list/interviews-list.component';
import { InterviewsRoutingModule } from './interviews-routing.module';

@NgModule({
   imports: [CommonModule, SharedModule, InterviewsRoutingModule],
   declarations: [InterviewsListComponent],
   exports: [InterviewsListComponent],
})
export class InterviewsModule {}
