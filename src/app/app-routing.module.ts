import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {GroupListComponent} from "./groups/group-list/group-list.component";
import {UserAddComponent} from "./user/user-add/user-add.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";

const routes: Routes = [
  { path: 'users',
    children: [
      {path: '', component: UserListComponent},
      {path: 'add', component: UserAddComponent},
      {path: ':id/edit', component: UserEditComponent},
    ]},
  {path: 'groups', component: GroupListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
