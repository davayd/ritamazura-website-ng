import { PhotographySession, RetouchSession } from 'models/session';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Input() nextSession?: PhotographySession | RetouchSession;
  @Input() previousSession?: PhotographySession | RetouchSession;

  constructor() {}
}
