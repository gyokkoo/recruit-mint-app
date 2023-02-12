import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobData } from '../job-list.data';
import { MatSelectChange } from '@angular/material/select';
import { JobItem } from '../job-list/job-list.component';
import { AuthenticationService } from '../../../core/services/auth.service';
import { Observable, of } from 'rxjs';

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
      private route: ActivatedRoute
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
}
