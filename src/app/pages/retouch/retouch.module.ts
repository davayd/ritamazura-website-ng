import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetouchRoutingModule } from './retouch-routing.module';
import { RetouchComponent } from './retouch.component';

@NgModule({
  declarations: [RetouchComponent],
  imports: [CommonModule, RetouchRoutingModule],
})
export class RetouchModule {}
