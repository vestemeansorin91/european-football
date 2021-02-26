import { FavoritesComponent } from './favorites/favorites.component';
import { CompetitionDetailsComponent } from './competition-details/competition-details.component';
import { DashboardResolver } from './dashboard.resolver';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      footballData: DashboardResolver
    }
  },
  {
    path: 'competition-details/:id',
    component: CompetitionDetailsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutes {}
