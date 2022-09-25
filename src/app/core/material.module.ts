import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  LayoutModule,
  MatListModule,
  MatSidenavModule,
  MatDialogModule
]


@NgModule({
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ],
  declarations: [
  
    PageNotFoundComponent
  ]
})
export class MaterialModule { }
