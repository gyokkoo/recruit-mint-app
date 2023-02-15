import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-schedule',
   templateUrl: 'schedule.component.html',
   styleUrls: ['schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
   editing: boolean = false;
   editElementId: number | null = null;
   interviewData = [
      {
         id: 1,
         position: 'Senior Java Developer',
         candidate: 'Джон Петров',
         date: '2022-02-13 10:00',
         place: 'Garitage Park сграда 4, ет. 3, зала 304',
      },
      {
         id: 2,
         position: 'Program Manager',
         candidate: 'Георги Георгиев',
         date: '2022-02-13 14:00',
         place: 'Garitage Park сграда 4, ет. 3, зала 301',
      },
      // { position: 'Product Manager', candidate: 'Jane Doe', date: '2022-05-02' },
      // { position: 'Data Scientist', candidate: 'Jim Brown', date: '2022-05-03' },
   ];
   displayedColumns = ['position', 'candidate', 'date', 'place', 'actions'];

   ngOnInit() {}

   constructor() {}

   editRow(element: any) {
      this.editing = true;
      console.log(element);
      this.editElementId = element.id;
   }
}
