import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographySessionComponent } from './photography-session.component';
import { PhotographySessionRoutingModule } from './photography-session-routing.module';
import { NgxMasonryModule } from 'src/app/components/ngx-masonry/ngx-masonry.module';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Zoom, Keyboard, Pagination, Lazy } from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom, Keyboard, Pagination, Lazy]);

@NgModule({
  imports: [
    CommonModule,
    PhotographySessionRoutingModule,
    NgxMasonryModule,
    PaginatorModule,
    SwiperModule,
  ],
  declarations: [PhotographySessionComponent],
  exports: [PhotographySessionComponent],
})
export class PhotographySessionModule {}
