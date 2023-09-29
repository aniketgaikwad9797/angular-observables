import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs-compat';
@Injectable({ providedIn: 'root' })
export class ActivateService {
  onAppActivate = new Subject<boolean>();
}
