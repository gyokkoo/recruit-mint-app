import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
   selector: 'app-job-apply',
   templateUrl: 'job-apply.component.html',
   styleUrls: ['job-apply.component.css'],
})
export class JobApplyComponent {
   personalInfo = {
      name: '',
      location: '',
      skills: '',
   };

   achievements = {
      certificates: false,
      diploma: false,
      other: false,
   };

   cvRequired = false;

   cvFile: File | null = null;

   constructor(
      public dialogRef: MatDialogRef<JobApplyComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
   ) {}

   onNoClick(): void {
      this.dialogRef.close();
   }

   onSubmit(): void {
      const modalData = {
         personalInfo: this.personalInfo,
         achievements: this.achievements,
         cvRequired: this.cvRequired,
      };
      this.dialogRef.close(modalData);
   }

   onFileChange(event: any): void {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0) {
         this.cvFile = fileList[0];
      }
   }
}
