import { HttpClient } from '@angular/common/http';
import {
  Translation,
  TranslocoLoader,
  translocoConfig,
  TranslocoModule,
  provideTranslocoConfig,
  provideTranslocoLoader,
  TranslocoService,
} from '@ngneat/transloco';
import { APP_INITIALIZER, Injectable, NgModule, inject, isDevMode } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTranslocoConfig(
      translocoConfig({
        availableLangs: ['en', 'ru'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        fallbackLang: 'en'
      })
    ),
    provideTranslocoLoader(TranslocoHttpLoader),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (transloco: TranslocoService) => {
        return function () {
          const lang = transloco.getActiveLang();
          return transloco.load(lang);
        };
      },
      deps: [TranslocoService],
    },
  ],
})
export class TranslocoRootModule {}
