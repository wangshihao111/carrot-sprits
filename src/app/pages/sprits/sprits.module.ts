import { NgModule } from '@angular/core';

import { SpritsRoutingModule } from './sprits-routing.module';

import { SpritsComponent } from './sprits.component';


@NgModule({
  imports: [SpritsRoutingModule],
  declarations: [SpritsComponent],
  exports: [SpritsComponent]
})
export class SpritsModule { }
