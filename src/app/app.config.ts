import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore, StoreModule } from '@ngrx/store';
import { AuthStateModule } from '@org/auth-lib';
import { appRoutes } from './app.routes';
import { PetEffects } from './features/pet/pet.effects';
import { petReducer } from './features/pet/pet.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore(),
    provideEffects(PetEffects),
    importProvidersFrom(
      StoreModule.forRoot({
        pet: petReducer,
      }),
      AuthStateModule
    ),
    provideAnimationsAsync(),
  ],
};
