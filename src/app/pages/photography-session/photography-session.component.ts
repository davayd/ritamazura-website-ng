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

  @ViewChild(NgxMasonryComponent) ngxMasonry!: NgxMasonryComponent;
  private destroy$ = new Subject<void>();

  constructor(
    private activateRoute: ActivatedRoute,
    private applicationStateService: ApplicationStateService,
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

  // private generateMasonry() {
  //   this.lazyImageObserver?.disconnect();
  //   this.lazyImageObserver = undefined;

  //   const msnry = new Masonry('.grid', this.masonryOptions);

  //   if (msnry && msnry.once) {
  //     msnry.once('layoutComplete', () => {
  //       console.log('layout done, just this one time');

  //       if (this.platform.isBrowser) {
  //         const lazyImages: HTMLImageElement[] = [].slice.call(
  //           document.querySelectorAll('img.lazy')
  //         );

  //         if ('IntersectionObserver' in window) {
  //           this.lazyImageObserver = new IntersectionObserver(
  //             (entries, observer) => {
  //               console.log('entries', entries);
  //               entries.forEach((entry) => {
  //                 if (entry.isIntersecting) {
  //                   let lazyImage = entry.target as HTMLImageElement;
  //                   if (lazyImage) {
  //                     lazyImage.src = lazyImage.dataset['src'] ?? '';
  //                     lazyImage.classList.remove('lazy');
  //                     lazyImage.removeAttribute('width');
  //                     lazyImage.removeAttribute('height');
  //                     this.lazyImageObserver?.unobserve(lazyImage);
  //                   }
  //                 }
  //               });
  //             }
  //           );

  //           lazyImages.forEach((lazyImage) => {
  //             this.lazyImageObserver?.observe(lazyImage);
  //           });
  //         } else {
  //           // Possibly fall back to event handlers here
  //         }
  //       }
  //     });
  //   }
  //   setTimeout(() => {
  //     if (msnry && msnry.layout) {
  //       msnry.layout();
  //     }
  //   });
  // }
}
