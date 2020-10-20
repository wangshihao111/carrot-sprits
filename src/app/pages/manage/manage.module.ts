import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module'
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageService } from '../../services/manage.service'
import {CreateComponent} from './create/create.component'

@NgModule({
  declarations: [ManageComponent, CreateComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule
  ],
  providers: [ManageService]
})
export class ManageModule { }
