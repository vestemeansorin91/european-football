export interface IFootballDataResponse {
  competitions: any[];
  count: number;
  filters: any;
}


export interface ICompetition {
  id: number;
  name: string;
  area: ICompetitionArea;
  code: any;
  currentSeason: ICompetitionSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: Date;
  emblemUrl: any;
  plan: string; // enum
}

export interface ICompetitionArea {
  id: number;
  name: string;
  countryCode: any; // enum
  ensignUrl: any;
}

export interface ICompetitionSeason {
  id: number;
  currentMatchday: any;
  endDate: Date;
  startDate: Date;
  winter: any;
}
