import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CompetitionDetailsComponent } from './pages/competition-details/competition-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'competition-details',
    component: CompetitionDetailsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
