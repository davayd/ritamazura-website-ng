import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgxMasonryOptions } from 'src/app/components/ngx-masonry/ngx-masonry-options';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { generateSession } from 'assets/main/data';
import { PhotographySession, PhotoItem } from 'models/session';
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

  constructor(private applicationStateService: ApplicationStateService) {
    this.gallery = generateSession(this.imageMode);
  }

  ngOnInit(): void {}

}
