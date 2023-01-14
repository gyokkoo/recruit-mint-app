import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable, timer } from 'rxjs';
import { Subscription } from 'rxjs';

import { AuthenticationService } from 'src/app/core/services/auth.service';
import { SpinnerService } from '../../core/services/spinner.service';
import { AuthGuard } from '../../core/guards/auth.guard';
import { ThemeService } from '../../custom-material/theme.service';
import { ThemeOption } from '../../custom-material/theme-option.model';

@Component({
   selector: 'app-layout',
   templateUrl: 'layout.component.html',
   styleUrls: ['layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit {
   private readonly _mobileQueryListener: () => void;
   mobileQuery: MediaQueryList;
   showSpinner: boolean = false;
   userName: string = '';
   isAdmin: boolean = false;
   isLoggedIn: boolean = false;
   private autoLogoutSubscription: Subscription = new Subscription();
   options$: Observable<ThemeOption[]> = this.themeService.getThemeOptions();

   constructor(
      private changeDetectorRef: ChangeDetectorRef,
      private media: MediaMatcher,
      public spinnerService: SpinnerService,
      private authService: AuthenticationService,
      private authGuard: AuthGuard,
      private themeService: ThemeService
   ) {
      this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this._mobileQueryListener);
   }

   ngOnInit(): void {
      const user = this.authService.getCurrentUser();
      this.isLoggedIn = !!user;
      if (user) {
         this.isAdmin = user.isAdmin || false;
         this.userName = user.fullName || '';

         // Auto log-out subscription
         const timer$ = timer(2000, 5000);
         this.autoLogoutSubscription = timer$.subscribe(() => {
            this.authGuard.canActivate();
         });
      }

      // this.themeService.setTheme('deeppurple-amber');
   }

   ngOnDestroy(): void {
      // tslint:disable-next-line: deprecation
      this.mobileQuery.removeListener(this._mobileQueryListener);
      this.autoLogoutSubscription.unsubscribe();
   }

   ngAfterViewInit(): void {
      this.changeDetectorRef.detectChanges();
   }

   themeChangeHandler(themeToSet: string): void {
      this.themeService.setTheme(themeToSet);
   }
}
