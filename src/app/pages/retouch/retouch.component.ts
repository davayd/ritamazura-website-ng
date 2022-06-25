import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RetouchSession } from 'src/app/models/session';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { ImageMode } from '../photography/photography.component';

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

  constructor(private _applicationStateService: ApplicationStateService) {}

  ngOnInit(): void {}
}
