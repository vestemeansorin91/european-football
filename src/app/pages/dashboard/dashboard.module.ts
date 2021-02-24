import { FootballApiInterceptor } from './../../shared/services/football-api.interceptor';
import { SharedModule } from './../../shared/shared.module';
import { FootballDataService } from './../../shared/services/football-data.service';
import { DashboardResolver } from './dashboard.resolver';
import { DashboardRoutes } from './dashboard.routes';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [CommonModule, DashboardRoutes, HttpClientModule, SharedModule],
  providers: [DashboardResolver, FootballDataService, { provide: HTTP_INTERCEPTORS, useClass: FootballApiInterceptor, multi: true },]
})
export class DashboardModule { }
