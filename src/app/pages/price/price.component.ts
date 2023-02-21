import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  GA_EVENTS,
  GoogleAnalyticsService,
} from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent implements OnInit {
  constructor(
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.googleAnalyticsService.sendEvent(GA_EVENTS.PAGE_PRICE_OPENED);
    this.googleAnalyticsService.sendCustomEvent('screen_view', {
      screen_name: 'Price',
    });
  }
}
