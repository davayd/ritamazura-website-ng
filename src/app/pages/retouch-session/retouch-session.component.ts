import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { asapScheduler, asyncScheduler, fromEvent, Subject } from 'rxjs';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { debounceTime, observeOn, takeUntil, tap } from 'rxjs/operators';
import { RetouchSession } from 'src/app/models/session';

declare var juxtapose: any;

@Component({
  selector: 'app-retouch-session',
  templateUrl: './retouch-session.component.html',
  styleUrls: ['./retouch-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RetouchSessionComponent implements OnInit, OnDestroy {
  session?: RetouchSession;
  mainWrapper = document.getElementById('main-wrapper');
  innerWidth =
    this.mainWrapper!.clientWidth -
    parseInt(getComputedStyle(this.mainWrapper!).paddingLeft) * 2;

  private destroy$ = new Subject<void>();

  constructor(
    private activateRoute: ActivatedRoute,
    private applicationStateService: ApplicationStateService
  ) {}

  ngOnInit(): void {
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
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
