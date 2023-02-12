import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate, CANDIDATE_DATA } from '../candidate-list/candidate-list.component';

export const stages = [
   { value: 'created', display: 'Създадено интервю (Created)' },
   { value: 'scheduled', display: 'Планирано интервю (Scheduled)' },
   { value: 'in_progress', display: 'Провежда се (In progress)' },
   { value: 'cancelled', display: 'Отменено интервю (Cancelled)' },
   { value: 'rejected', display: 'Кандидат отхвърлен (Rejected)' },
   { value: 'added_to_reserves', display: 'Кандидат добавен към резерви (Added to reserves)' },
   { value: 'follow_up_interview', display: 'Към 2-ро интервю (Follow-up interview)' },
   { value: 'accepted', display: 'Кандидат одобрен/назначен (Accepted)' },
   { value: 'candidate_rejected', display: 'Кандидат отхвърлил (Candidate rejected)' },
];

@Component({
   selector: 'app-candidate-details',
   templateUrl: 'candidate-details.component.html',
   styleUrls: ['candidate-details.component.css'],
})
export class CandidateDetailsComponent implements OnInit {
   candidate: Candidate | undefined;

   isEditing: boolean = true;

   constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
      const id: number = Number(this.route.snapshot.paramMap.get('id'));
      this.candidate = CANDIDATE_DATA.find((candidate) => candidate.id === id);
   }

   editCandidate() {
      this.isEditing = !this.isEditing;
   }

   deleteCandidate() {}
}
