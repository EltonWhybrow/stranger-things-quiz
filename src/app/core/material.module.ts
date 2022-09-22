import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  LayoutModule,
  MatListModule

]


@NgModule({
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
