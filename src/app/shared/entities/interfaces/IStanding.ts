export interface IStanding {
  stage: any; //enum
  type: any; // enum
  group: any;
  table: IStandingTable[];
}

export interface IStandingTable {
  position: number;
  team: IStandingTableTeam;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface IStandingTableTeam {
  id: number;
  name: string;
  crestUrl: string;
}
