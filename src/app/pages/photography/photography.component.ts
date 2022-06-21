import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PhotographySession } from '../../models/session';
import { ApplicationStateService } from '../../services/application-state.service';

export type ImageMode = 'mobile' | 'desktop';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotographyComponent implements OnInit {
  imageMode: ImageMode = 'mobile';

  photographySessions: PhotographySession[] =
    this._applicationStateService.photographySessions;

  constructor(private _applicationStateService: ApplicationStateService) {}

  ngOnInit(): void {}
}
