import { generatePhotographySessions } from 'src/app/services/photography-generator';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
import { NgxMasonryOptions } from 'src/app/components/ngx-masonry/ngx-masonry-options';
import { NgxMasonryComponent } from 'src/app/components/ngx-masonry/ngx-masonry.component';
import { PhotographySession } from 'models/session';
import { ApplicationStateService } from '../../services/application-state.service';
import { TEAM_MEMBERS } from 'assets/teamMembers';
import { SwiperComponent } from 'swiper/angular';
import Swiper from 'swiper';

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

  desktopCurrentSession?: PhotographySession;

  imageMode = this.applicationStateService.imageMode;

  @ViewChild(NgxMasonryComponent) ngxMasonry!: NgxMasonryComponent;
  private destroy$ = new Subject<void>();

  currentTeamMembers: { [key: string]: string[] } = {};

  itemId$ = this.activateRoute.queryParamMap.pipe(
    map((queryParams) => queryParams.get('itemId'))
  );

  constructor(
    private activateRoute: ActivatedRoute,
    private applicationStateService: ApplicationStateService,
    private cdRef: ChangeDetectorRef,
    private router: Router
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
        this.desktopCurrentSession =
          generatePhotographySessions('desktop')[currentSessionIndex];

        if (this.currentSession) {
          this.currentTeamMembers =
            TEAM_MEMBERS[this.currentSession?.transliteratedUrl];
        }

        this.cdRef.markForCheck();
      });
  }

  onSwiper(swiper: SwiperComponent, photoId: string) {
    const swiperIndex = this.findIndexByPhotoId(photoId);
    (swiper as any).slideTo(swiperIndex);
    document.body.classList.add('overflow-hidden');
  }

  onSwiperDestroy() {
    document.body.classList.remove('overflow-hidden');
  }

  onSlideChange(swiper: Swiper[]) {
    // swiper.active
    // this.router.navigate([], {
    //   relativeTo: this.activateRoute,
    //   queryParams: {
    //     photoId: this.carouselPhotoId,
    //   },
    //   queryParamsHandling: 'merge',
    // });
  }

  private findIndexByPhotoId(itemId: string) {
    return this.currentSession?.photos.findIndex((i) => i.label === itemId);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
