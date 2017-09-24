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
  MatSelectModule
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
  MatSelectModule
];

@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialModule { }
