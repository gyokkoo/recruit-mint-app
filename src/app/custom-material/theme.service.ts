import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ThemeOption } from './theme-option.model';
import { StyleManagerService } from './style-manager';

@Injectable()
export class ThemeService {
   constructor(private http: HttpClient, private styleManager: StyleManagerService) {}

   getThemeOptions(): Observable<ThemeOption[]> {
      return this.http.get<ThemeOption[]>('assets/theme-options.json');
   }

   setTheme(themeToSet: string): void {
      this.styleManager.setStyle('theme', `assets/styles/${themeToSet}.css`);
   }
}
