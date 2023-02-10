import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-rich-text-editor',
   templateUrl: 'rick-text-editor.component.html',
   styleUrls: ['rich-text-editor.component.css'],
})
export class RichTextEditorComponent {
   @Input() hasEditPrivilege: boolean = true;

   @Input() content: string = '';
   @Output() contentChange = new EventEmitter<string>();

   isEditing = false;

   toggleEdit() {
      this.isEditing = !this.isEditing;
   }

   updateContent(content: string) {
      console.log(content);
      this.content = content;
      this.contentChange.emit(content);
   }
}
