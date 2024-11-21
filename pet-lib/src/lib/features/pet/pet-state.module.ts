import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PetEffects } from './pet.effects';
import { PetFacade } from './pet.facade';
import { PetService } from './pet.service';
import { petKey, petReducer } from './pet.state';

@NgModule({
  imports: [
    StoreModule.forFeature(petKey, petReducer),
    EffectsModule.forFeature([PetEffects]),
  ],
  providers: [PetFacade, PetService],
})
export class PetStateModule {}
