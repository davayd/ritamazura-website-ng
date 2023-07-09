import { Injectable } from '@angular/core';

declare var gtag: any;

export enum GA_EVENTS {
  PHOTO_VIEWER_OPEN = 'PHOTO_VIEWER_OPEN',
  PHOTO_VIEWER_CLOSE = 'PHOTO_VIEWER_CLOSE',
  PHOTO_VIEWER_SWIPE = 'PHOTO_VIEWER_SWIPE',

  PAGINATOR_LEFT = 'PAGINATOR_LEFT',
  PAGINATOR_RIGHT = 'PAGINATOR_RIGHT',

  PAGE_PRICE_OPENED = 'PAGE_PRICE_OPENED',
}

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  sendEvent(eventName: GA_EVENTS) {
    gtag('event', eventName);
  }

  sendCustomEvent(key: string, value: any) {
    gtag('event', key, value);
  }
}
