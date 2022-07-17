import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveRoutingModule } from './active-routing.module';
import { UserComponent } from '../user/user.component';
@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, ActiveRoutingModule],
})
export class ActiveModule {}
