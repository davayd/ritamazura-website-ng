import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NgxMasonryModule } from 'src/app/components/ngx-masonry/ngx-masonry.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxMasonryModule,
  ],
})
export class MainModule {}
