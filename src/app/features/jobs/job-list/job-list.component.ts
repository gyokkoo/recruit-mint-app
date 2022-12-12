import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '../../../core/services/notification.service';

export interface JobItem {
  id: string;
  name: string;
  requirements: string;
  isRemote: boolean;
}

const JOB_LIST: JobItem[] = [
  { id: '1', name: 'Senior Java Software Engineer', requirements: '5+ години опит с Java', isRemote: true },
  { id: '2', name: 'Python Developer', requirements: '2+ години опит с Python', isRemote: false },
  { id: '3', name: 'Senior iOS Developer', requirements: '2+ години опит с Python', isRemote: false },
  { id: '4', name: 'Intern Cloud Computing', requirements: '-', isRemote: false },
];

@Component({
  selector: 'app-customer-list',
  templateUrl: 'job-list.component.html',
  styleUrls: ['job-list.component.css']
})
export class JobListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'requirements', 'isRemote', 'action'];
  dataSource = new MatTableDataSource(JOB_LIST);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title
  ) { }

  openDialog(action: any,obj: any) {
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


  ngOnInit(): void {
    this.titleService.setTitle('angular-material-template - Customers');
    this.logger.log('Кандидатите са заредени');
    this.notificationService.openSnackBar('Кандидатите са заредени');
    this.dataSource.sort = this.sort;
  }
}
