import { SharedStore } from '../shared/shared.store';
import { ModalService } from '../shared/components/modal/modal.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent{
  constructor(private route: ActivatedRoute, public store: SharedStore, private modalService: ModalService) {
    this.route.data.subscribe(response => {
      this.store.allCompetitions$.next(response.footballData.competitions);
    })
   }

   open() {
    this.modalService.open();
    console.log('t')
  }
}
