import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sprits' },
  { path: 'sprits', loadChildren: () => import('./pages/sprits/sprits.module').then(m => m.SpritsModule) },
  { path: 'manage', loadChildren: () => import('./pages/manage/manage.module').then(m => m.ManageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
