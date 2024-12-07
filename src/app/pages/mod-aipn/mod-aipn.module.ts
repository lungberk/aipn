import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';

import { DefaultDashboardComponent } from './default/default.component';
import { ModAIPNRoutingModule } from './mod-aipn-routing';
import { ExportAIPNCliamComponent } from './export-aipncliam/export-aipncliam.component';
import { UploadAIPNXMLComponent } from './upload-aipnxml/upload-aipnxml.component';
import { ImportAIPNXMLComponent } from './import-aipnxml/import-aipnxml.component';
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
    ExportAIPNCliamComponent,
    UploadAIPNXMLComponent,
    ImportAIPNXMLComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    UIModule,
    ModAIPNRoutingModule,
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
export class DashboardsModule { }
