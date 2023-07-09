import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./pages/portfolio/portfolio.module').then(
        (m) => m.PortfolioModule
      ),
  },
  {
    path: 'portfolio/:id',
    loadChildren: () =>
      import('./pages/portfolio-category/portfolio-category.module').then(
        (m) => m.PortfolioCategoryModule
      ),
  },
  {
    path: 'price',
    loadChildren: () =>
      import('./pages/price/price.module').then((m) => m.PriceModule),
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
