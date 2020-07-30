import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { InputSearchComponent } from './core/input-search/input-search.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { GroupListComponent } from './groups/group-list/group-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputSearchComponent,
    UserListComponent,
    GroupListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
