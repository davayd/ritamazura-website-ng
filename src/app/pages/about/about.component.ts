import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  constructor(
    private readonly googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.googleAnalyticsService.sendCustomEvent('screen_view', {
      screen_name: 'About',
    });
  }
}
