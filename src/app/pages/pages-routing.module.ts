import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./mod-aipn/mod-aipn.module').then(m => m.ModAIPNModule) },
  { path: 'aipn', loadChildren: () => import('./mod-aipn/mod-aipn.module').then(m => m.ModAIPNModule) },
  { path: 'cipn', loadChildren: () => import('./mod-cipn/mod-cipn.module').then(m => m.ModCIPNModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
