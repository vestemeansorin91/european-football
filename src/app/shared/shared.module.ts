import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';

const COMPONENTS = [NavbarComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, RouterModule],
  exports: [COMPONENTS]
})
export class SharedModule {}
