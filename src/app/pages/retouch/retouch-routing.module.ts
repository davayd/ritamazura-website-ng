import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetouchComponent } from './retouch.component';

const routes: Routes = [
  {
    path: '',
    component: RetouchComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetouchRoutingModule {}
