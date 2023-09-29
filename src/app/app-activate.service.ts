import { Injectable, EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ActivateService {
  onAppActivate = new EventEmitter<boolean>();
}
