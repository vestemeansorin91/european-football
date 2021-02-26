import { SharedStore } from './../../shared/shared.store';
import { FootballDataService } from '../../shared/services/football-data.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStandingResponse } from '../../shared/entities/interfaces/IApiResponses';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss'],
  providers: [FootballDataService]
})
export class CompetitionDetailsComponent{
  competitionId = null;

  constructor(private route: ActivatedRoute, private footballDataService: FootballDataService, public store: SharedStore) {
    this.competitionId = this.route.snapshot.params.id;

    this.footballDataService.getAllStandings(this.competitionId).subscribe((response: IStandingResponse) => {
      this.store.allStandings$.next(response.standings);
      this.store.currentCompetition$.next(response.competition);
      this.store.currentSeason$.next(response.season);
    })
  }

}
