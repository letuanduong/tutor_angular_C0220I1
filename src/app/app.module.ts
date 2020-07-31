import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { InputSearchComponent } from './core/input-search/input-search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {UserAddComponent} from "./user/user-add/user-add.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {UserListComponent} from "./user/user-list/user-list.component";
import {GroupListComponent} from "./groups/group-list/group-list.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputSearchComponent,
    UserAddComponent,
    UserEditComponent,
    UserListComponent,
    GroupListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
