import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { ImageMode, PhotographySession } from 'models/session';
import { BehaviorSubject } from 'rxjs';
import { generatePhotographySessions } from './photography-generator';

@Injectable({
  providedIn: 'root',
})
export class ApplicationStateService {
  photographySessions: PhotographySession[] = [];

  imageMode: ImageMode = 'desktop';
  isViewerOpened = new BehaviorSubject<string | null>(null);

  constructor(private _breakpointObserver: BreakpointObserver) {
    this.imageMode = this._breakpointObserver.isMatched(Breakpoints.XSmall)
      ? 'mobile'
      : 'desktop';

    this.photographySessions = generatePhotographySessions(this.imageMode);
  }
}
