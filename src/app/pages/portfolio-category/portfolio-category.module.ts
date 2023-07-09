import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCategoryComponent } from './portfolio-category.component';
import { PortfolioCategoryRoutingModule } from './portfolio-category-routing.module';
import { NgxMasonryModule } from 'src/app/components/ngx-masonry/ngx-masonry.module';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Zoom, Keyboard, Pagination, Lazy } from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom, Keyboard, Pagination, Lazy]);

@NgModule({
  imports: [
    CommonModule,
    PortfolioCategoryRoutingModule,
    NgxMasonryModule,
    PaginatorModule,
    SwiperModule,
  ],
  declarations: [PortfolioCategoryComponent],
  exports: [PortfolioCategoryComponent],
})
export class PortfolioCategoryModule {}
