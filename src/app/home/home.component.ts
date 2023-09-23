import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  //private observableSubscription: Subscription;
  private customIntSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.observableSubscription = interval(1000).subscribe((value) => {
    //   console.log(value);
    // });

    const customIntObservable = Observable.create((obeserver) => {
      let count = 0;
      setInterval(() => {
        obeserver.next(count);
        count--;
      }, 1000);
    });

    this.customIntSubscription = customIntObservable.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    //this.observableSubscription.unsubscribe();
    this.customIntSubscription.unsubscribe();
  }
}
