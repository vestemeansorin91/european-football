import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutes, BrowserModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
