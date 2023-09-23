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
        if (count == -4) obeserver.complete();
        if (count < -4) obeserver.error(new Error('Count is greater than -4'));
        count--;
      }, 1000);
    });

    this.customIntSubscription = customIntObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      ()=>{
        console.log('Some cleanup logic that can be written, let\'s say on a completion of http request')
      }
    );
  }

  ngOnDestroy(): void {
    //this.observableSubscription.unsubscribe();
    this.customIntSubscription.unsubscribe();
  }
}
