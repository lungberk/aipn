import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbCollapseModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { SlimscrollDirective } from './slimscroll.directive';
import { PreloaderComponent } from './preloader/preloader.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { InputTimeComponent } from './input-time/input-time.component';
import { PickerDateComponent } from './picker-date/picker-date.component';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    SlimscrollDirective,
    PreloaderComponent,
    PagetitleComponent,
    InputTimeComponent,
    PickerDateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    SlimscrollDirective,
    PreloaderComponent,
    PagetitleComponent,
    InputTimeComponent,
    PickerDateComponent
  ]
})
export class UIModule { }
