import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NgxMasonryModule } from 'src/app/components/ngx-masonry/ngx-masonry.module';
import { RouteToSessionPipe } from 'src/app/pipes/route-to-session.pipe';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxMasonryModule,
    RouteToSessionPipe,
  ],
})
export class MainModule {}
