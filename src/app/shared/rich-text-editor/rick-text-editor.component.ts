import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
   selector: 'app-rich-text-editor',
   templateUrl: 'rick-text-editor.component.html',
   styleUrls: ['rich-text-editor.component.css'],
})
export class RichTextEditorComponent implements OnInit {
   @Input() hasEditPrivilege: boolean = false;

   @Input() content: string = '';
   @Output() contentChange = new EventEmitter<string>();

   isEditing = false;

   ngOnInit(): void {
      // this.hasEditPrivilege = false;
      console.log(this.hasEditPrivilege);
   }

   toggleEdit() {
      this.isEditing = !this.isEditing;
   }

   updateContent(content: string) {
      console.log(content);
      this.content = content;
      this.contentChange.emit(content);
   }
}
