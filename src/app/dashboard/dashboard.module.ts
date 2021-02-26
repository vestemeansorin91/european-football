import { TeamInfoModalComponent } from './competition-details/team-info-modal/team-info-modal.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CompetitionDetailsComponent } from './competition-details/competition-details.component';
import { SharedModule } from '../shared/shared.module';
import { FootballDataService } from '../shared/services/football-data.service';
import { DashboardResolver } from './dashboard.resolver';
import { DashboardRoutes } from './dashboard.routes';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashboardComponent,
    CompetitionDetailsComponent,
    FavoritesComponent,
    TeamInfoModalComponent
  ],
  imports: [CommonModule, DashboardRoutes, SharedModule],
  providers: [DashboardResolver, FootballDataService],
  entryComponents: [TeamInfoModalComponent]
})
export class DashboardModule { }
