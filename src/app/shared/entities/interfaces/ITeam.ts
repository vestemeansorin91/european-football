export interface ITeam {
  id: number;
  area: ITeamArea;
  name: any; // string / enum
  shortName: any; // string / enum
  tla: any; // enum
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  squad: ITeamSquad[];
  lastUpdated: Date;
}

export interface ITeamArea {
  id: number;
  name: any; // enum
}

export interface ITeamSquad {
  id: number;
  name: string;
  position: any; // enum
  dateOfBirth: Date;
  countryOfBirth: any; // enum
  nationality: any; // enum
  role: any; // enum
}
