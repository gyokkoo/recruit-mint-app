import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

@NgModule({
   imports: [CommonModule, SharedModule, CandidatesRoutingModule],
   declarations: [CandidateListComponent, CandidateDetailsComponent],
})
export class CandidatesModule {}
