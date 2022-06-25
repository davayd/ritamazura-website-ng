import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetouchSessionRoutingModule } from './retouch-session-routing.module';
import { RetouchSessionComponent } from './retouch-session.component';
import { PaginatorModule } from 'src/app/components/paginator/paginator.module';

@NgModule({
  declarations: [RetouchSessionComponent],
  imports: [CommonModule, RetouchSessionRoutingModule, PaginatorModule],
})
export class RetouchSessionModule {}
