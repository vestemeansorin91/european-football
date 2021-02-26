import { TeamInfoModalComponent } from './team-info-modal/team-info-modal.component';
import { IStandingTable } from './../../shared/entities/interfaces/IStanding';
import { SharedStore } from './../../shared/shared.store';
import { FootballDataService } from '../../shared/services/football-data.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStandingResponse } from '../../shared/entities/interfaces/IApiResponses';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss'],
  providers: [FootballDataService]
})
export class CompetitionDetailsComponent{
  competitionId = null;

  constructor(private route: ActivatedRoute, private footballDataService: FootballDataService, private dialog: MatDialog, public store: SharedStore) {
    this.competitionId = this.route.snapshot.params.id;

    this.footballDataService.getStandingsByCompetitionId(this.competitionId).subscribe((response: IStandingResponse) => {
      this.store.allStandings$.next(response.standings);
      this.store.currentCompetition$.next(response.competition);
      this.store.currentSeason$.next(response.season);
    })
  }

  public favoriteToggle(event, table: IStandingTable): void {
    event.stopPropagation();

    if(table.hasOwnProperty('favorite')) {
      table.favorite = !table.favorite;
    } else {
      table.favorite = true;
    }
  }

  public teamInfoClicked(teamId: string): void {
    this.dialog.open(TeamInfoModalComponent, {
      width: '60vw',
      height: '80vh',
      data: {
        teamId
      }
    })

  }

}
