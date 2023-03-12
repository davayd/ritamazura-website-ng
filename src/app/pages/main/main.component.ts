import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgxMasonryOptions } from 'src/app/components/ngx-masonry/ngx-masonry-options';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { generateSession } from 'assets/main/data';
import { PhotographySession } from 'models/session';
import { SITE_MAP } from 'assets/sitemap';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { orderedSession } from 'src/app/services/photography-generator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  gallery: PhotographySession;
  SITE_MAP = SITE_MAP;

  constructor(
    private applicationStateService: ApplicationStateService,
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {
    const session = generateSession(this.imageMode);
    this.gallery = orderedSession(session);
  }

  ngOnInit(): void {
    this.googleAnalyticsService.sendCustomEvent('screen_view', {
      screen_name: 'Main',
    });
  }
}
