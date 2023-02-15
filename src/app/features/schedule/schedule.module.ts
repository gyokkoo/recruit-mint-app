import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { ScheduleComponent } from './icons/schedule.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
   declarations: [ScheduleComponent],
   imports: [CommonModule, SharedModule, IconsRoutingModule],
})
export class ScheduleModule {}
