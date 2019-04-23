import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ServersListComponent } from './main/components/server-list/server-list.component';
import { ServerComponent } from './main/components/server-list/server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ServersListComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
