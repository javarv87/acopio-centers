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
  MatSnackBarModule
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
  MatSnackBarModule
];

@NgModule({
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialModule { }
