import { FootballDataService } from '../shared/services/football-data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class DashboardResolver implements Resolve<any> {
  constructor(private footballService: FootballDataService){}

  resolve(route: ActivatedRouteSnapshot) {
   return this.footballService.getAllCompetitions();
  }
}
