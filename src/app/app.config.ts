import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app-routing.module';
import { TranslocoRootModule } from './transloco-root.module';
import { LayoutModule } from '@angular/cdk/layout';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(TranslocoRootModule, LayoutModule),
    provideAnimationsAsync(),
    provideRouter(routes, withRouterConfig({ onSameUrlNavigation: 'reload' })),
    provideHttpClient(withFetch()),
  ],
};
