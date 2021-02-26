import { IStanding } from './IStanding';
import { ICompetition, ICompetitionSeason } from './ICompetition';

export interface ICompetitionResponse {
  competitions: ICompetition[];
  count: number;
  filters: any;
}

export interface IStandingResponse {
  filters: any;
  competition: ICompetition;
  season: ICompetitionSeason;
  standings: IStanding[];
}
