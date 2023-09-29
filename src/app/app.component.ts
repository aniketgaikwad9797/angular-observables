import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivateService } from './app-activate.service';
import { Subscription } from 'rxjs-compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  appActivated = false;
  activateSubscription: Subscription;
  constructor(private appActivateService: ActivateService) {}

  ngOnInit() {
    this.activateSubscription = this.appActivateService.onAppActivate.subscribe(
      (isAppActivated: boolean) => {
        this.appActivated = isAppActivated;
      }
    );
  }

  ngOnDestroy(): void {
    this.activateSubscription.unsubscribe();
  }
}
