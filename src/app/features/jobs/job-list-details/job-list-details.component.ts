import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobData } from '../job-list.data';
import { MatSelectChange } from '@angular/material/select';
import { JobItem } from '../job-list/job-list.component';

@Component({
   selector: 'app-job-list-details',
   templateUrl: 'job-list-details.component.html',
   styleUrls: ['job-list-details.component.css'],
})
export class JobListDetailsComponent implements OnInit {
   jobInfo: JobItem | undefined;
   selectOptions: any = [];

   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      const id: string | null = this.route.snapshot.paramMap.get('id');
      this.jobInfo = jobData.find((info) => info.id === id);
   }

   onChange($event: MatSelectChange) {}
}
