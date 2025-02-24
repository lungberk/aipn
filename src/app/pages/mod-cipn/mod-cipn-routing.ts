import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultDashboardComponent } from './default/default.component';
import { ExportCIPNComponent } from './export-cipn/export-cipn.component';


const routes: Routes = [
    {
        path: 'default',
        component: DefaultDashboardComponent
    },
    {
        path: 'exportcipn',
        component: ExportCIPNComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModCIPNRoutingModule { }
