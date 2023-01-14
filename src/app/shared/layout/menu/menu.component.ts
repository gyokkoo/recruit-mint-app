import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeOption } from '../../../custom-material/theme-option.model';
import { AuthenticationService } from '../../../core/services/auth.service';

@Component({
   selector: 'app-menu',
   templateUrl: 'menu.component.html',
})
export class MenuComponent implements OnInit {
   @Input() userName: string = '';
   @Input() themeOptions: ThemeOption[] | null = [];
   @Output() themeOptionsChange: EventEmitter<string> = new EventEmitter<string>();

   isLoggedIn: boolean = false;

   constructor(private authService: AuthenticationService) {}

   ngOnInit(): void {
      this.authService.isLoggedIn$().subscribe((isLoggedIn: boolean) => {
         this.isLoggedIn = isLoggedIn;
      });
   }

   changeTheme(themeToSet: string): void {
      this.themeOptionsChange.emit(themeToSet);
   }
}
