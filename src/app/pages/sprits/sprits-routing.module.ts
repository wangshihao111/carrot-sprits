import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpritsComponent } from './sprits.component';

const routes: Routes = [
  { path: '', component: SpritsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpritsRoutingModule { }
