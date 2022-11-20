import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

const MEASUREMENT_ID = 'G-3FXJN1ZFRL';

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor(public readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', MEASUREMENT_ID, {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
