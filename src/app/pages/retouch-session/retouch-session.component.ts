import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { RetouchSession } from 'models/session';
import {
  GA_EVENTS,
  GoogleAnalyticsService,
} from 'src/app/services/google-analytics.service';
import { SITE_MAP } from 'assets/sitemap';

declare var juxtapose: any;

@Component({
  selector: 'app-retouch-session',
  templateUrl: './retouch-session.component.html',
  styleUrls: ['./retouch-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RetouchSessionComponent implements OnInit, OnDestroy {
  mainWrapper: HTMLElement | null = null;
  innerWidth: number = 0;
  isCourseFolder = false;

  currentSession?: RetouchSession;
  nextSession?: RetouchSession;
  previousSession?: RetouchSession;
  SITE_MAP = SITE_MAP;

  private destroy$ = new Subject<void>();

  constructor(
    private activateRoute: ActivatedRoute,
    private applicationStateService: ApplicationStateService,
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.mainWrapper = document.getElementById('main-wrapper');

    if (this.mainWrapper) {
      this.innerWidth =
        this.mainWrapper.clientWidth -
        parseInt(getComputedStyle(this.mainWrapper).paddingLeft) * 2;
    }

    this.activateRoute.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((paramMap) => {
        const sessionId = paramMap.get('id');

        if (!sessionId) {
          return;
        }

        const currentSessionIndex =
          this.applicationStateService.retouchSessions.findIndex(
            (i) => i.sessionId === sessionId
          );

        if (currentSessionIndex < 0) {
          return;
        }

        this.currentSession =
          this.applicationStateService.retouchSessions[currentSessionIndex];
        this.previousSession =
          this.applicationStateService.retouchSessions[currentSessionIndex - 1];
        this.nextSession =
          this.applicationStateService.retouchSessions[currentSessionIndex + 1];

        setTimeout(() => {
          juxtapose.scanPage();
        });

        this.isCourseFolder =
          this.activateRoute.snapshot.params['id'] === 'course' || false;
      });

    fromEvent(document, 'sliderUpdated')
      .pipe(debounceTime(200), takeUntil(this.destroy$))
      .subscribe(() => {
        this.googleAnalyticsService.sendEvent(GA_EVENTS.RETOUCH_SLIDER_TOUCHED);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
