import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    this.observableSubscription = interval(1000).subscribe((value) => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.observableSubscription.unsubscribe();
  }
}
