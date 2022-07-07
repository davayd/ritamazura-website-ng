import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
import { NgxMasonryOptions } from 'src/app/components/ngx-masonry/ngx-masonry-options';
import { NgxMasonryComponent } from 'src/app/components/ngx-masonry/ngx-masonry.component';
import { PhotographySession } from '../../models/session';
import { ApplicationStateService } from '../../services/application-state.service';

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

  session?: PhotographySession;
  isNotFound = false;
  lazyImageObserver?: IntersectionObserver;
  imageMode = this.applicationStateService.imageMode;

  @ViewChild(NgxMasonryComponent) ngxMasonry!: NgxMasonryComponent;
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
        this.session = this.applicationStateService.photographySessions.find(
          (i) => i.transliteratedUrl === sessionUrlName
        );
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
