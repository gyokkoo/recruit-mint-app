import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';
import { of, EMPTY, Observable } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class AuthenticationService {
   constructor(private http: HttpClient, @Inject('LOCALSTORAGE') private localStorage: Storage) {}

   login$(email: string, password: string): Observable<boolean> {
      return of(true).pipe(
         delay(1000),
         map((/*response*/) => {
            // set token property
            // const decodedToken = jwt_decode(response['token']);

            let isHr: boolean = false;
            let isAdmin: boolean = false;
            if (email?.toLowerCase()?.indexOf('recruit')) {
               isHr = true;
               isAdmin = true;
            }

            const name: string = email.split('@')[0];

            // store email and jwt token in local storage to keep user logged in between page refreshes
            this.localStorage.setItem(
               'currentUser',
               JSON.stringify({
                  token: 'aisdnaksjdn,axmnczm',
                  isAdmin: isAdmin,
                  isHr: isHr,
                  email: email,
                  id: '12312323232',
                  alias: email.split('@')[0],
                  expiration: moment().add(1, 'days').toDate(),
                  fullName: name,
               })
            );

            return true;
         })
      );
   }

   register$(email: string, password: string): Observable<boolean> {
      return this.login$(email, password);
   }

   logout(): void {
      console.log('Logout()');
      // clear token remove user from local storage to log user out
      this.localStorage.removeItem('currentUser');
   }

   getCurrentUser(): any {
      // TODO: Enable after implementation
      const currentUser: any = this.localStorage.getItem('currentUser');

      return JSON.parse(currentUser);
   }

   passwordResetRequest(email: string) {
      return of(true).pipe(delay(1000));
   }

   changePassword(email: string, currentPwd: string, newPwd: string) {
      return of(true).pipe(delay(1000));
   }

   passwordReset(email: string, token: string, password: string, confirmPassword: string): any {
      return of(true).pipe(delay(1000));
   }
}
