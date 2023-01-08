import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

const MEASUREMENT_ID = 'G-3FXJN1ZFRL';
declare var gtag: any;

export enum GA_EVENTS {
  PHOTO_VIEWER_OPEN = 'PHOTO_VIEWER_OPEN',
  PHOTO_VIEWER_CLOSE = 'PHOTO_VIEWER_CLOSE',
  PHOTO_VIEWER_SWIPE = 'PHOTO_VIEWER_SWIPE',

  RETOUCH_SLIDER_TOUCHED = 'RETOUCH_SLIDER_TOUCHED',

  PAGINATOR_LEFT = 'PAGINATOR_LEFT',
  PAGINATOR_RIGHT = 'PAGINATOR_RIGHT',
}

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', MEASUREMENT_ID, {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }

  sendEvent(eventName: GA_EVENTS) {
    gtag('event', eventName);
  }
}
