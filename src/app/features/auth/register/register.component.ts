import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthenticationService } from '../../../core/services/auth.service';

@Component({
   selector: 'app-register',
   templateUrl: 'register.component.html',
   styleUrls: ['register.component.css'],
})
export class RegisterComponent implements OnInit {
   hideNewPassword: boolean = true;
   hideNewPasswordConfirm: boolean = true;
   loginForm!: UntypedFormGroup;
   loading!: boolean;

   constructor(
      private router: Router,
      private titleService: Title,
      private notificationService: NotificationService,
      private authenticationService: AuthenticationService
   ) {}

   ngOnInit(): void {
      this.titleService.setTitle('angular-material-template - Register');
      // this.authenticationService.logout();
      this.createForm();
   }

   private createForm(): void {
      const savedUserEmail = localStorage.getItem('savedUserEmail');

      this.loginForm = new UntypedFormGroup({
         email: new UntypedFormControl(savedUserEmail, [Validators.required, Validators.email]),
         password: new UntypedFormControl('', Validators.required),
         passwordConfirm: new UntypedFormControl('', Validators.required),
         phone: new UntypedFormControl(''),
      });
   }

   register(): void {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const passwordConfirm = this.loginForm.get('passwordConfirm')?.value;
      const phone = this.loginForm.get('phone')?.value;

      if (password !== passwordConfirm) {
         this.notificationService.openSnackBar('Паролите не съвпадат');
         return;
      }

      this.loading = true;
      this.authenticationService.register$(email.toLowerCase(), password).subscribe(
         (data: boolean) => {
            console.log(data);
            this.router.navigate(['/']);
         },
         (error: any) => {
            this.notificationService.openSnackBar(error.error);
            this.loading = false;
         }
      );
   }

   navigateToLoginPage(): void {
      this.router.navigate(['/auth/login']);
   }
}
