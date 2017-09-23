import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-centro',
  templateUrl: './modal-centro.component.html',
  styleUrls: ['./modal-centro.component.sass']
})
export class ModalCentroComponent {
  constructor(
    public dialogRef: MdDialogRef<ModalCentroComponent>,
    @Inject(MD_DIALOG_DATA) public centro: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
