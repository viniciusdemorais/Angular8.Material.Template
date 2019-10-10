import { OnInit, OnDestroy, Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  unsub = new Subject();
  loadingDashboard = false;
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.unsubscribe();
  }
}
