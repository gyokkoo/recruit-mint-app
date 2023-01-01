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
   loginForm!: UntypedFormGroup;
   loading!: boolean;

   constructor(
      private router: Router,
      private titleService: Title,
      private notificationService: NotificationService,
      private authenticationService: AuthenticationService
   ) {}

   ngOnInit() {
      this.titleService.setTitle('angular-material-template - Login');
      this.authenticationService.logout();
      this.createForm();
   }

   private createForm() {
      const savedUserEmail = localStorage.getItem('savedUserEmail');

      this.loginForm = new UntypedFormGroup({
         email: new UntypedFormControl(savedUserEmail, [Validators.required, Validators.email]),
         password: new UntypedFormControl('', Validators.required),
         rememberMe: new UntypedFormControl(savedUserEmail !== null),
      });
   }

   register(): void {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const rememberMe = this.loginForm.get('rememberMe')?.value;

      this.loading = true;
      this.authenticationService.register$(email.toLowerCase(), password).subscribe(
         (data: boolean) => {
            console.log(data);
            if (rememberMe) {
               localStorage.setItem('savedUserEmail', email);
            } else {
               localStorage.removeItem('savedUserEmail');
            }
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
