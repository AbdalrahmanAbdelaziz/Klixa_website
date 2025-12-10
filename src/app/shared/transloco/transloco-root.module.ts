import { NgModule, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  TranslocoModule,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TRANSLOCO_LOADER,
} from '@ngneat/transloco';
import { TranslocoHttpLoader } from './transloco-loader';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'ar'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
  ],
})
export class TranslocoRootModule {}
