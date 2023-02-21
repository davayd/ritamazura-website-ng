import { Injectable } from '@angular/core';

const MEASUREMENT_ID = 'G-3FXJN1ZFRL';
declare var gtag: any;

export enum GA_EVENTS {
  PHOTO_VIEWER_OPEN = 'PHOTO_VIEWER_OPEN',
  PHOTO_VIEWER_CLOSE = 'PHOTO_VIEWER_CLOSE',
  PHOTO_VIEWER_SWIPE = 'PHOTO_VIEWER_SWIPE',

  RETOUCH_SLIDER_TOUCHED = 'RETOUCH_SLIDER_TOUCHED',

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
