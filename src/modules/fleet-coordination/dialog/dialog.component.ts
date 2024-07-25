import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  @Input() showDeleteDialog!: boolean;
  @Input() showMessageDialog!: boolean;
  @Input() message!: string;
  @Input() fleet!: VisualFleet;
  @Output() close = new EventEmitter<any>();


  closeMessageDialog() {
    this.close.emit();
  }

  closeDeleteDialog(confirm: boolean) {
    this.close.emit(confirm);
  }
}

interface VisualFleet {
  fleetId: string,
  location: string,
  fleetManager: string
}