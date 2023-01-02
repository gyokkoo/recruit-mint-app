import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';

import { JobListComponent } from './job-list/job-list.component';
import { JobListDetailsComponent } from './job-list-details/job-list-details.component';

const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         { path: '', component: JobListComponent },
         {
            path: 'details/:id',
            component: JobListDetailsComponent,
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class JobsRoutingModule {}
