import { Subject } from 'rxjs';
import { ITeam } from './../../../shared/entities/interfaces/ITeam';
import { FootballDataService } from './../../../shared/services/football-data.service';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ModalData {
  teamId: string;
}

@Component({
  selector: 'app-team-info-modal',
  templateUrl: './team-info-modal.component.html',
  styleUrls: ['./team-info-modal.component.scss']
})
export class TeamInfoModalComponent {
  hasTeamInfo = false;
  teamInfo$ = new Subject<ITeam>();

  constructor( public dialogRef: MatDialogRef<TeamInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData, public service: FootballDataService) {
      this.service.getTeamById(this.data.teamId).subscribe((response) => {
        this.teamInfo$.next(response);
        this.hasTeamInfo = !!response;
      }, err => {
          this.hasTeamInfo = true;
      })
    }

}
