import { IFootballDataResponse } from './../entities/interfaces/IFootball';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FootballDataService {
  constructor(private http: HttpClient) {}

  public getAllCompetitions():Observable<IFootballDataResponse> {
    return this.http.get<IFootballDataResponse>(`${environment.api.url}/competitions`);
  }
}
