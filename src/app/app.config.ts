import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AuthEffects } from './features/auth/auth.effects';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './features/auth/auth.state';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PetEffects } from './features/pet/pet.effects';
import { petReducer } from './features/pet/pet.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore(),
    provideEffects(AuthEffects, PetEffects),
    importProvidersFrom(
      StoreModule.forRoot({
        auth: authReducer,
        pet: petReducer,
      })
    ),
    provideAnimationsAsync(),
  ],
};
