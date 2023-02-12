import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';

import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         { path: '', component: CandidateListComponent },
         {
            path: 'details/:id',
            component: CandidateDetailsComponent,
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class CandidatesRoutingModule {}
