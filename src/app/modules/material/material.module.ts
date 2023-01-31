import { NgModule } from '@angular/core';
import { MatButtonModule} from "@angular/material/button";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatCardModule
]
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
