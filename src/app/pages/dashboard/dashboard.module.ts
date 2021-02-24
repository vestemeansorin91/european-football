import { DashboardRoutes } from './dashboard.routes';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [DashboardRoutes]
})
export class DashboardModule { }
