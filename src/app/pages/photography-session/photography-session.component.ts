import { TEAM_MEMBERS } from './../../../assets/photos/teamMembers';
import { SITE_MAP } from 'assets/sitemap';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
import { NgxMasonryOptions } from 'src/app/components/ngx-masonry/ngx-masonry-options';
import { NgxMasonryComponent } from 'src/app/components/ngx-masonry/ngx-masonry.component';
import { PhotographySession } from 'models/session';
import { ApplicationStateService } from '../../services/application-state.service';
import mediumZoom from 'medium-zoom';

@Component({
  selector: 'app-photography-session',
  templateUrl: './photography-session.component.html',
  styleUrls: ['./photography-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotographySessionComponent implements OnInit, OnDestroy {
  masonryOptions: NgxMasonryOptions = {
    gutter: '.gutter-sizer',
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    horizontalOrder: true,
  };

  currentSession?: PhotographySession;
  nextSession?: PhotographySession;
  previousSession?: PhotographySession;

  imageMode = this.applicationStateService.imageMode;

  @ViewChild(NgxMasonryComponent) ngxMasonry!: NgxMasonryComponent;
  private destroy$ = new Subject<void>();

  currentTeamMembers: { [key: string]: string[] } = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private applicationStateService: ApplicationStateService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((paramMap) => {
        const sessionUrlName = paramMap.get('id');

        if (!sessionUrlName) {
          return;
        }

        const currentSessionIndex =
          this.applicationStateService.photographySessions.findIndex(
            (i) => i.transliteratedUrl === sessionUrlName
          );

        if (currentSessionIndex < 0) {
          return;
        }

        this.currentSession =
          this.applicationStateService.photographySessions[currentSessionIndex];
        this.previousSession =
          this.applicationStateService.photographySessions[
            currentSessionIndex - 1
          ];
        this.nextSession =
          this.applicationStateService.photographySessions[
            currentSessionIndex + 1
          ];

        if (this.currentSession) {
          this.currentTeamMembers =
            TEAM_MEMBERS[this.currentSession?.transliteratedUrl];
        }

        this.cdRef.markForCheck();

        setTimeout(() => {
          mediumZoom('[data-zoomable]');
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
