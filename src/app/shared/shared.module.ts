import { ModalComponent } from './components/modal/modal.component';
import { FootballApiInterceptor } from './services/football-api.interceptor';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';

const COMPONENTS = [NavbarComponent, ModalComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers:[, { provide: HTTP_INTERCEPTORS, useClass: FootballApiInterceptor, multi: true }],
  exports: [COMPONENTS],
})
export class SharedModule {}
