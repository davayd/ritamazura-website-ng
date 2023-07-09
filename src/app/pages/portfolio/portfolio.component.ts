import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ImageMode, PhotographySession } from 'models/session';
import { ApplicationStateService } from '../../services/application-state.service';
import { SITE_MAP } from 'assets/sitemap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements OnInit {
  imageMode: ImageMode = 'mobile';

  photographySessions: PhotographySession[] =
    this._applicationStateService.photographySessions;

  SITE_MAP = SITE_MAP;

  constructor(private _applicationStateService: ApplicationStateService) {}

  ngOnInit(): void {}

  over(imgEl: HTMLImageElement, imgUrl: string) {
    imgEl.src = imgUrl;
  }

  out(imgEl: HTMLImageElement, imgUrl: string) {
    imgEl.src = imgUrl;
  }
}
