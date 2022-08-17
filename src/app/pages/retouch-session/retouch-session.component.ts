import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { takeUntil } from 'rxjs/operators';
import { RetouchSession } from 'models/session';

declare var juxtapose: any;

@Component({
  selector: 'app-retouch-session',
  templateUrl: './retouch-session.component.html',
  styleUrls: ['./retouch-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RetouchSessionComponent implements OnInit, OnDestroy {
  session?: RetouchSession;
  mainWrapper: HTMLElement | null = null;
  innerWidth: number = 0;
  isCourseFolder = false;

  private destroy$ = new Subject<void>();

  constructor(
    private activateRoute: ActivatedRoute,
    private applicationStateService: ApplicationStateService
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
        const sessionUrlName = paramMap.get('id');
        this.session = this.applicationStateService.retouchSessions.find(
          (i) => i.transliteratedUrl === sessionUrlName
        );
        setTimeout(() => {
          juxtapose.scanPage();
        });

        this.isCourseFolder =
          this.activateRoute.snapshot.params['id'] === 'course' || false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  onSwipeLeft(e: any) {
    console.log(e);
  }

  onSwipeRight(e: any) {
    console.log(e);
  }
}
