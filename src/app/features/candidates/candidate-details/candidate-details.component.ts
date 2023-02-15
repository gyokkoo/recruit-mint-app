import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate, CANDIDATE_DATA } from '../candidate-list/candidate-list.component';

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
