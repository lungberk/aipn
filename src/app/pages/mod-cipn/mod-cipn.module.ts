import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';

import { DefaultDashboardComponent } from './default/default.component';
import { ModCIPNRoutingModule } from './mod-cipn-routing';
import { ExportCIPNComponent } from './export-cipn/export-cipn.component';
import { 
  MatExpansionModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule
} from '@angular/material';
@NgModule({
  declarations: [
    DefaultDashboardComponent,
    ExportCIPNComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    UIModule,
    ModCIPNRoutingModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class ModCIPNModule { }
