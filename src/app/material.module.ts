import { NgModule } from '@angular/core';

import { 
  MatMenuModule, 
  MatToolbarModule, 
  MatButtonModule, 
  MatIconModule, 
  MatCardModule, 
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatCardModule, 
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatMenuModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatCardModule, 
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class MaterialModule {}

