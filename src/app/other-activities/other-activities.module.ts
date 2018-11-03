import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherActivitiesComponent } from './other-activities/other-activities.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OtherActivitiesComponent],
  exports:
  [
    OtherActivitiesComponent
  ]
})
export class OtherActivitiesModule { }
