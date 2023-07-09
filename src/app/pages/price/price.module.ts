import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price.component';
import { TranslocoModule, HashMap } from '@ngneat/transloco';


@NgModule({
  declarations: [
    PriceComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    PriceRoutingModule
  ]
})
export class PriceModule { }
