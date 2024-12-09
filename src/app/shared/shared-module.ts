
import {  NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatTableModule,
  FormsModule,
  CommonModule
];

@NgModule({
  declarations: [],
  imports: [ ...matModules],
  exports: [ ...matModules ]

})
export class SharedModule {}
