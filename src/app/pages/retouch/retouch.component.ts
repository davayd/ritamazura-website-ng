import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SITE_MAP } from 'assets/sitemap';
import { RetouchSession, ImageMode } from 'models/session';
import { ApplicationStateService } from 'src/app/services/application-state.service';

@Component({
  selector: 'app-retouch',
  templateUrl: './retouch.component.html',
  styleUrls: ['./retouch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RetouchComponent implements OnInit {
  imageMode: ImageMode = 'mobile';

  retouchSessions: RetouchSession[] =
    this._applicationStateService.retouchSessions;
  SITE_MAP = SITE_MAP;

  constructor(private _applicationStateService: ApplicationStateService) {}

  ngOnInit(): void {}
}
