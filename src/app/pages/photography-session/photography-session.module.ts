import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographySessionComponent } from './photography-session.component';
import { PhotographySessionRoutingModule } from './photography-session-routing.module';
import { NgxMasonryModule } from 'src/app/components/ngx-masonry/ngx-masonry.module';

@NgModule({
  imports: [CommonModule, PhotographySessionRoutingModule, NgxMasonryModule],
  declarations: [PhotographySessionComponent],
  exports: [PhotographySessionComponent],
})
export class PhotographySessionModule {}
