import { Component, OnInit } from '@angular/core';
import { ActivateService } from './app-activate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appActivated = false;
  constructor(private appActivateService: ActivateService) {}

  ngOnInit() {
    this.appActivateService.onAppActivate.subscribe(
      (isAppActivated: boolean) => {
        this.appActivated = isAppActivated;
      }
    );
  }
}
