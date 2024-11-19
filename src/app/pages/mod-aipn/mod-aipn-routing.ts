import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultDashboardComponent } from './default/default.component';
import { ExportAIPNCliamComponent } from './export-aipncliam/export-aipncliam.component';
import { UploadAIPNXMLComponent } from './upload-aipnxml/upload-aipnxml.component';
import { ImportAIPNXMLComponent } from './import-aipnxml/import-aipnxml.component';


const routes: Routes = [
    {
        path: 'default',
        component: DefaultDashboardComponent
    },
    {
        path: '',
        component: ExportAIPNCliamComponent
    },
    {
        path: 'exportaipn',
        component: ExportAIPNCliamComponent
    },
    {
        path: 'uploadaipn',
        component: UploadAIPNXMLComponent
    },
    {
        path: 'importaipn',
        component: ImportAIPNXMLComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModAIPNRoutingModule { }
