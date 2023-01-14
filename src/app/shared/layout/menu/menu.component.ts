import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeOption } from '../../../custom-material/theme-option.model';

@Component({
   selector: 'app-menu',
   templateUrl: 'menu.component.html',
})
export class MenuComponent {
   @Input() userName: string = '';
   @Input() themeOptions: ThemeOption[] | null = [];
   @Output() themeOptionsChange: EventEmitter<string> = new EventEmitter<string>();

   constructor() {}

   changeTheme(themeToSet: string): void {
      this.themeOptionsChange.emit(themeToSet);
   }
}
