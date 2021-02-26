import { FavoritesComponent } from './dashboard/favorites/favorites.component';
import { CompetitionDetailsComponent } from './dashboard/competition-details/competition-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
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
