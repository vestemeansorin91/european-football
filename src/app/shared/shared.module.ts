import { FootballApiInterceptor } from './services/football-api.interceptor';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatDialogModule} from '@angular/material/dialog';


const ANGULAR_MATERIAL_MODULES = [MatDialogModule]


@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, ANGULAR_MATERIAL_MODULES],
  providers:[{ provide: HTTP_INTERCEPTORS, useClass: FootballApiInterceptor, multi: true }],
})
export class SharedModule {}
