import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./mod-aipn/mod-aipn.module').then(m => m.DashboardsModule) },
  { path: 'aipn', loadChildren: () => import('./mod-aipn/mod-aipn.module').then(m => m.DashboardsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
