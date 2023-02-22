import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobData } from '../job-list.data';
import { JobItem } from '../job-list/job-list.component';
import { AuthenticationService } from '../../../core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { JobApplyComponent } from '../job-apply/job-apply.component';

@Component({
   selector: 'app-job-list-details',
   templateUrl: 'job-list-details.component.html',
   styleUrls: ['job-list-details.component.css'],
})
export class JobListDetailsComponent implements OnInit {
   jobInfo: JobItem | undefined;

   isHr: boolean = false;

   constructor(
      private authenticationService: AuthenticationService,
      private route: ActivatedRoute,
      private dialog: MatDialog
   ) {}

   ngOnInit(): void {
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.jobInfo = jobData.find((info) => info.id === id);

      this.authenticationService.isHr$().subscribe((isHr) => (this.isHr = isHr));
   }

   updateDescription(description: string) {
      if (this.jobInfo) {
         this.jobInfo.longDescription = description;
      }
   }

   applyForJob(): void {
      const dialogRef = this.dialog.open(JobApplyComponent, {
         width: '275px',
      });

      dialogRef.afterClosed().subscribe((result) => {
         console.log(result);
      });
   }
}
