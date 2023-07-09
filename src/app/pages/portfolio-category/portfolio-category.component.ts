import { generatePhotographySessions } from 'src/app/services/photography-generator';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
import { NgxMasonryOptions } from 'src/app/components/ngx-masonry/ngx-masonry-options';
import { NgxMasonryComponent } from 'src/app/components/ngx-masonry/ngx-masonry.component';
import { PhotographySession } from 'models/session';
import { ApplicationStateService } from '../../services/application-state.service';
import { SwiperComponent } from 'swiper/angular';
import {
  GA_EVENTS,
  GoogleAnalyticsService,
} from 'src/app/services/google-analytics.service';
import { SITE_MAP } from 'assets/sitemap';

@Component({
  selector: 'app-portfolio-category',
  templateUrl: './portfolio-category.component.html',
  styleUrls: ['./portfolio-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCategoryComponent implements OnInit, OnDestroy {
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

  desktopCurrentSession?: PhotographySession;

  imageMode = this.applicationStateService.imageMode;
  isViewerOpened$ = this.applicationStateService.isViewerOpened.asObservable();
  SITE_MAP = SITE_MAP;

  @ViewChild(NgxMasonryComponent) ngxMasonry!: NgxMasonryComponent;
  private destroy$ = new Subject<void>();

  constructor(
    private activateRoute: ActivatedRoute,
    private applicationStateService: ApplicationStateService,
    private cdRef: ChangeDetectorRef,
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((paramMap) => {
        const sessionId = paramMap.get('id');

        if (!sessionId) {
          return;
        }

        const currentSessionIndex =
          this.applicationStateService.photographySessions.findIndex(
            (i) => i.sessionId === sessionId
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
        this.desktopCurrentSession =
          generatePhotographySessions('desktop')[currentSessionIndex];

        this.cdRef.markForCheck();
      });
  }

  onSwiper(swiper: SwiperComponent) {
    const targetPhoto = this.applicationStateService.isViewerOpened.value;

    if (!targetPhoto) {
      return;
    }

    const swiperIndex = this.findIndexByPhotoId(targetPhoto);

    (swiper as any).slideTo(swiperIndex);

    document.body.classList.add('overflow-hidden');
    this.googleAnalyticsService.sendEvent(GA_EVENTS.PHOTO_VIEWER_OPEN);
  }

  onSwiperDestroy() {
    document.body.classList.remove('overflow-hidden');
    this.googleAnalyticsService.sendEvent(GA_EVENTS.PHOTO_VIEWER_CLOSE);
  }

  closeViewer() {
    this.applicationStateService.isViewerOpened.next(null);
  }

  openViewer(photoItem: string) {
    this.applicationStateService.isViewerOpened.next(photoItem);
  }

  onSlideChange() {
    this.googleAnalyticsService.sendEvent(GA_EVENTS.PHOTO_VIEWER_SWIPE);
  }

  private findIndexByPhotoId(itemId: string) {
    return this.currentSession?.photos.findIndex((i) => i.label === itemId);
  }

  @HostListener('window:keydown.Escape')
  private onEscape() {
    this.closeViewer();
  }

  ngOnDestroy(): void {
    this.applicationStateService.isViewerOpened.next(null);
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
