import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutes, BrowserModule, SharedModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
