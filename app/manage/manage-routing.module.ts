import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from '../users-list/users-list.component';
import { UserComponent } from '../user/user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    children: [{ path: 'details', component: UserDetailsComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRoutingModule {}
