import { ICompetition } from './../../shared/entities/interfaces/IFootball';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DashboardStore {
  allCompetitions$ = new BehaviorSubject<ICompetition[]>([]);
}
