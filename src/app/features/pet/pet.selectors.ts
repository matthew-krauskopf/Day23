import { createFeatureSelector, createSelector } from '@ngrx/store';
import { petKey, PetState } from './pet.state';
import { mapPhotos } from './pet.utils';

export const selectPetState = createFeatureSelector<PetState>(petKey);

export const selectedPetId = createSelector(
  selectPetState,
  (petState) => petState.selectedPet
);

export const selectPets = createSelector(selectPetState, (petState) =>
  mapPhotos(petState.pets)
);

export const selectedPet = createSelector(
  selectedPetId,
  selectPets,
  (petId, allPets) => allPets.find((p) => p.id == petId)
);

export const isProcessing = createSelector(
  selectPetState,
  (state) => state.isSaving || state.isLoading || state.isDeleting
);
