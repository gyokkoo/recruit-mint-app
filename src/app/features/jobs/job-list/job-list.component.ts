import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '../../../core/services/notification.service';
import { jobData } from '../job-list.data';

export interface JobItem {
   id: string;
   name: string;
   requirements: string;
   description: string;
   longDescription?: string;
   isRemote: boolean;
}

@Component({
   selector: 'app-job-list',
   templateUrl: 'job-list.component.html',
   styleUrls: ['job-list.component.css'],
})
export class JobListComponent implements OnInit {
   @Input() showActions: boolean = true;

   displayedColumns: string[] = ['name', 'requirements', 'description', 'isRemote', 'action'];

   dataSource = new MatTableDataSource(jobData);

   @ViewChild(MatSort, { static: true })
   sort: MatSort = new MatSort();

   constructor(
      private logger: NGXLogger,
      private notificationService: NotificationService,
      private titleService: Title
   ) {}

   openDialog(action: any, obj: any) {
      // obj.action = action;
      // const dialogRef = this.dialog.open(DialogBoxComponent, {
      //   width: '250px',
      //   data:obj
      // });
      // dialogRef.afterClosed().subscribe(result => {
      //   if(result.event == 'Add'){
      //     this.addRowData(result.data);
      //   }else if(result.event == 'Update'){
      //     this.updateRowData(result.data);
      //   }else if(result.event == 'Delete'){
      //     this.deleteRowData(result.data);
      //   }
      // });
   }

   navigateToDetails(jobItem: any): void {
      console.log(jobItem);
   }

   applyFilter(event: any): void {
      console.log(event.value);
   }

   ngOnInit(): void {
      this.titleService.setTitle('angular-material-template - Customers');
      this.logger.log('Позициите са заредени');
      this.notificationService.openSnackBar('Позициите са заредени');
      this.dataSource.sort = this.sort;
   }
}
