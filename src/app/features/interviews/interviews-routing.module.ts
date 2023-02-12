import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterviewsListComponent } from './list/interviews-list.component';
import { LayoutComponent } from '../../shared/layout/layout.component';

const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         { path: '', component: InterviewsListComponent },
         // {
         //    path: 'details/:id',
         //    component: JobListDetailsComponent,
         // },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class InterviewsRoutingModule {}
