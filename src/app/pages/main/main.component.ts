import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgxMasonryOptions } from 'src/app/components/ngx-masonry/ngx-masonry-options';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { SITE_MAP } from 'assets/sitemap';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { mainRouterHelper } from 'src/app/utils/utils';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class MainComponent implements OnInit {
  masonryOptions: NgxMasonryOptions = {
    gutter: '.gutter-sizer',
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    horizontalOrder: true,
  };
  imageMode = this.applicationStateService.imageMode;
  SITE_MAP = SITE_MAP;
  mainRouterHelper = mainRouterHelper;

  constructor(
    private applicationStateService: ApplicationStateService,
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {
    // const session = generateSession(this.imageMode);
    // this.gallery = orderedSession(session);
  }

  ngOnInit(): void {
    this.googleAnalyticsService.sendCustomEvent('screen_view', {
      screen_name: 'Main',
    });
  }
}
