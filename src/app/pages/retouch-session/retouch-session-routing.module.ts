import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetouchSessionComponent } from './retouch-session.component';

const routes: Routes = [{ path: '', component: RetouchSessionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetouchSessionRoutingModule { }
