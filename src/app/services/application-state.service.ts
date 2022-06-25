import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { PhotographySession, RetouchSession } from '../models/session';
import { generatePhotographySessions } from './photography-generator';
import { generateRetouchSessions } from './retouch-generator';

@Injectable({
  providedIn: 'root',
})
export class ApplicationStateService {
  photographySessions: PhotographySession[] = [];
  retouchSessions: RetouchSession[] = [];

  constructor(private _breakpointObserver: BreakpointObserver) {
    const imageMode = this._breakpointObserver.isMatched(Breakpoints.XSmall)
      ? 'mobile'
      : 'desktop';

    this.photographySessions = generatePhotographySessions(imageMode);
    this.retouchSessions = generateRetouchSessions(imageMode);
  }
}
