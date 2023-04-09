import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'photography',
    loadChildren: () =>
      import('./pages/photography/photography.module').then(
        (m) => m.PhotographyModule
      ),
  },
  {
    path: 'photography/:id',
    loadChildren: () =>
      import('./pages/photography-session/photography-session.module').then(
        (m) => m.PhotographySessionModule
      ),
  },
  {
    path: 'retouch',
    loadChildren: () =>
      import('./pages/retouch/retouch.module').then((m) => m.RetouchModule),
  },
  {
    path: 'retouch/:id',
    loadChildren: () =>
      import('./pages/retouch-session/retouch-session.module').then(
        (m) => m.RetouchSessionModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
