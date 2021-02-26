import { IStanding } from './entities/interfaces/IStanding';
import { ICompetition, ICompetitionSeason } from './entities/interfaces/ICompetition';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedStore {
  currentSeason$ = new BehaviorSubject<ICompetitionSeason>(null);
  currentCompetition$ = new BehaviorSubject<ICompetition>(null);
  allCompetitions$ = new BehaviorSubject<ICompetition[]>([]);

  allStandings$ = new BehaviorSubject<IStanding[]>([]);
}
