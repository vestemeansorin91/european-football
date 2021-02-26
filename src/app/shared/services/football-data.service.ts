import { ICompetitionResponse, IStandingResponse } from '../entities/interfaces/IApiResponses';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FootballDataService {
  params = new HttpParams().set('plan', 'TIER_ONE');

  constructor(private http: HttpClient) { }

  public getAllCompetitions(): Observable<ICompetitionResponse> {
    return this.http.get<ICompetitionResponse>(
      `${environment.api.url}/competitions`,
      { params: this.params }
    );
  }

  public getStandingsByCompetitionId(id: string): Observable<IStandingResponse> {
    return this.http.get<IStandingResponse>(
      `${environment.api.url}/competitions/${id}/standings`,
      { params: this.params }
    );
  }

  public getTeamById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.api.url}/teams/${id}`, { params: this.params });
  }
}
