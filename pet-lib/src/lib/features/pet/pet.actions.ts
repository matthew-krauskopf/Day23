import { createAction, props } from '@ngrx/store';
import { Pet } from './pet.entity';

export const addPet = createAction('[Pet List] Add Pet');

export const loadPet = createAction(
  '[Pet List] Load Pet',
  props<{ id: number }>()
);

export const loadPets = createAction('[Background] Load Pets');

export const loadPetsSuccess = createAction(
  '[Background] Load Pets Successful',
  props<{ pets: Pet[] }>()
);

export const loadPetsFail = createAction('[Background] Load Pets Fail');

export const deletePet = createAction(
  '[Pet Detail] Delete Pet',
  props<{ id: number }>()
);

export const unloadPets = createAction('[Logout] Unload Pets');

export const updatePet = createAction(
  '[Pet Details] Update Pet',
  props<{ name: string; age: number; species: string }>()
);
