import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { ActiveModule } from './active/active.module';
import { HomeComponent } from './home/home.component';
import { DeletedModule } from './deleted/deleted.module';
import { ManageModule } from './manage/manage.module';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    ActiveModule,
    DeletedModule,
    ManageModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
