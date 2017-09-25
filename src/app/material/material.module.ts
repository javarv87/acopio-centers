import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule
} from '@angular/material';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule
];

@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialModule { }
