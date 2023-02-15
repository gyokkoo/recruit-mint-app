import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NGXLogger } from 'ngx-logger';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatTableDataSource } from '@angular/material/table';

export interface Candidate {
   id: number;
   name: string;
   contact_details: string;
   documents: string;
   education: string;
   work_experience: string;
   job_opening_id: number;
   job_opening_string: string;
   account_information: number;
   current_stage_id: number;
   current_stage_string: string;
}

export const CANDIDATE_DATA: Candidate[] = [
   {
      id: 15,
      name: 'Джон Петров',
      contact_details: 'johndoe@email.com',
      documents: 'CV, диплома',
      education: 'Бакалавър',
      work_experience: '5 години опит като програмист',
      job_opening_id: 1,
      job_opening_string: 'Senior Java Developer',
      account_information: 1,
      current_stage_id: 2,
      current_stage_string: 'Планирано интервю',
   },
   {
      id: 11,
      name: 'Иван Петков',
      contact_details: 'ivan@email.com',
      documents: 'CV, препоръка',
      education: 'Основно образование',
      work_experience: '3 години опит като sys admin',
      job_opening_id: 2,
      job_opening_string: 'Системент администратор',
      account_information: 2,
      current_stage_id: 1,
      current_stage_string: 'Към 2-ро интервю',
   },
];

@Component({
   selector: 'app-candidate-list',
   templateUrl: 'candidate-list.component.html',
   styleUrls: ['candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
   displayedColumns: string[] = [
      'id',
      'name',
      'contact_details',
      'documents',
      'education',
      'work_experience',
      'job_opening_string',
      'current_stage_string',
   ];
   dataSource = new MatTableDataSource(CANDIDATE_DATA);

   stages: any[] = [
      { value: 'scheduled', display: 'Планирано интервю' },
      { value: 'accepted', display: 'Кандидат одобрен/назначен' },
      { value: 'added_to_reserves', display: 'Кандидат добавен резерви (1-во интервю)' },
      { value: 'added_to_reserves_second', display: 'Кандидат добавен резерви (2-ро интервю)' },
      { value: 'follow_up_interview', display: 'Към 2-ро интервю' },
   ];
   selectable = true;
   removable = true;

   constructor(
      private logger: NGXLogger,
      private notificationService: NotificationService,
      private titleService: Title
   ) {}

   ngOnInit() {
      this.titleService.setTitle('angular-material-template - Users');
      this.logger.log('Users loaded');
   }

   remove(stage: any): void {
      const index = this.stages.indexOf(stage);

      if (index >= 0) {
         this.stages.splice(index, 1);
      }
   }
}
