import { DashboardStore } from './dashboard.store';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  constructor(private route: ActivatedRoute, public dashboardStore: DashboardStore) {
    this.route.data.subscribe(response => {
      this.dashboardStore.allCompetitions$.next(response.footballData.competitions);
    })
   }
}
