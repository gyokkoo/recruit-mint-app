import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-interviews-list',
   templateUrl: 'interviews-list.component.html',
   styleUrls: ['interviews-list.component.css'],
})
export class InterviewsListComponent implements OnInit {
   displayedColumns: string[] = [
      'date_time',
      'place',
      'interviewer',
      'result',
      'candidate_id',
      'stage',
      'actions',
   ];
   dataSource: any = [];
   editing = false;
   editedElementId: number | null = null;
   dateTimeModel: string = '';
   timeModel: string = '';

   constructor() {}

   ngOnInit(): void {
      this.dataSource = [
         {
            id: 1,
            date_time: '2022-02-13 10:00:00',
            place: 'Garitage Park сграда 4, ет. 3, зала 301',
            interviewer: 'Драган Драганов',
            result: '-',
            candidate_id: 15,
            stage: 'Предстои',
         },
         {
            id: 2,
            date_time: '2022-01-02 11:00:00',
            interviewer: 'Иван Петков',
            place: 'Garitage Park сграда 4, ет. 3, зала 302',
            result: 'Успешно',
            candidate_id: 11,
            stage: 'Преминало',
         },
         {
            id: 3,
            date_time: '2022-01-01 12:00:00',
            place: 'Garitage Park сграда 4, ет. 3, зала 303',
            interviewer: 'Иван Петков',
            result: 'Успешно',
            candidate_id: 9,
            stage: 'Преминало',
         },
      ];

      const now = new Date();
      this.dateTimeModel = now.toISOString().split('T')[0];
      this.timeModel = now.toLocaleTimeString().split(':').slice(0, 2).join(':');
   }

   editInterview(element: any) {
      this.editing = true;
      this.editedElementId = element.id;
   }

   saveInterview(element: any) {
      this.editing = false;
      this.editedElementId = null;
      // Add code to save the updated element to the server
   }

   addInterview() {}

   updateDateTime(element: any, event: any) {
      element.date_time = new Date(event + 'T' + this.timeModel);
   }

   updateTime(element: any, event: any) {
      element.date_time = new Date(
         (this.dateTimeModel as any).toISOString().split('T')[0] + 'T' + event
      );
   }
}
