import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';
import {
  GA_EVENTS,
  GoogleAnalyticsService,
} from 'src/app/services/google-analytics.service';
import { makeAccordion } from './accordion';

@Component({
    selector: 'app-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PriceComponent implements OnInit, AfterViewInit {
  private readonly googleAnalyticsService = inject(GoogleAnalyticsService);
  private readonly vcRef = inject(ViewContainerRef);

  ngOnInit(): void {
    this.googleAnalyticsService.sendEvent(GA_EVENTS.PAGE_PRICE_OPENED);
    this.googleAnalyticsService.sendCustomEvent('screen_view', {
      screen_name: 'Price',
    });
  }

  ngAfterViewInit(): void {
    makeAccordion(this.vcRef.element.nativeElement);
  }
}
