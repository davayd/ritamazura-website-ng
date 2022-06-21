import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotographySessionComponent } from './photography-session.component';

const routes: Routes = [
  {
    path: '',
    component: PhotographySessionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotographySessionRoutingModule {}
