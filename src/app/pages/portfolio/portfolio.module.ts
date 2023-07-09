import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographyRoutingModule as PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
