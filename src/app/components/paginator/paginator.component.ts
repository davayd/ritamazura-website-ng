import { PhotographySession, RetouchSession } from 'models/session';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {
  GA_EVENTS,
  GoogleAnalyticsService,
} from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Input() nextSession?: PhotographySession | RetouchSession;
  @Input() previousSession?: PhotographySession | RetouchSession;

  constructor(
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {}

  onPrevious() {
    this.googleAnalyticsService.sendEvent(GA_EVENTS.PAGINATOR_LEFT);
  }

  onNext() {
    this.googleAnalyticsService.sendEvent(GA_EVENTS.PAGINATOR_RIGHT);
  }
}
