import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographySessionComponent } from './photography-session.component';
import { PhotographySessionRoutingModule } from './photography-session-routing.module';
import { NgxMasonryModule } from 'src/app/components/ngx-masonry/ngx-masonry.module';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';

@NgModule({
  imports: [
    CommonModule,
    PhotographySessionRoutingModule,
    NgxMasonryModule,
    PaginatorModule,
  ],
  declarations: [PhotographySessionComponent],
  exports: [PhotographySessionComponent],
})
export class PhotographySessionModule {}
