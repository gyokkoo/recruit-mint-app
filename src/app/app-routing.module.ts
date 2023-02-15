import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
   {
      path: 'dashboard',
      loadChildren: () =>
         import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
   },
   {
      path: 'auth',
      loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
   },
   {
      path: 'job-list',
      loadChildren: () => import('./features/jobs/jobs.module').then((m) => m.JobsModule),
   },
   {
      path: 'interviews-list',
      loadChildren: () =>
         import('./features/interviews/interviews.module').then((m) => m.InterviewsModule),
      canActivate: [AuthGuard],
   },
   {
      path: 'candidates',
      loadChildren: () =>
         import('./features/candidates/candidates.module').then((m) => m.CandidatesModule),
      canActivate: [AuthGuard],
   },
   {
      path: 'account',
      loadChildren: () => import('./features/account/account.module').then((m) => m.AccountModule),
      canActivate: [AuthGuard],
   },
   {
      path: 'schedule',
      loadChildren: () =>
         import('./features/schedule/schedule.module').then((m) => m.ScheduleModule),
      canActivate: [AuthGuard],
   },
   {
      path: 'typography',
      loadChildren: () =>
         import('./features/typography/typography.module').then((m) => m.TypographyModule),
      canActivate: [AuthGuard],
   },
   {
      path: 'about',
      loadChildren: () => import('./features/about/about.module').then((m) => m.AboutModule),
   },
   {
      path: '**',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
];

@NgModule({
   imports: [
      RouterModule.forRoot(
         appRoutes,
         { enableTracing: false } // <-- debugging purposes only
      ),
   ],
   exports: [RouterModule],
   providers: [],
})
export class AppRoutingModule {}
