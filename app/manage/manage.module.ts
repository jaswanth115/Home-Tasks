import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';

import { UsersListComponent } from '../users-list/users-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
@NgModule({
  declarations: [UsersListComponent, UserDetailsComponent],
  imports: [CommonModule, ManageRoutingModule],
})
export class ManageModule {}
