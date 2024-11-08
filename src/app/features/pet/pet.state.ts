import { createReducer, on } from '@ngrx/store';
import { logout } from '../auth/auth.actions';
import {
  loadPet,
  loadPets,
  loadPetsFail,
  loadPetsSuccess,
  deletePet,
} from './pet.actions';
import { Pet } from './pet.entity';
import { deletePetUtil } from './pet.utils';

export interface PetState {
  pets: Pet[];
  selectedPet?: number;
  isLoading: boolean;
  isSaving: boolean;
  isDeleting: boolean;
}

export const petState: PetState = {
  pets: [],
  isLoading: false,
  isSaving: false,
  isDeleting: false,
};

export const petKey = 'pet';

export const petReducer = createReducer(
  petState,
  on(loadPet, (state, { id }) => ({
    ...state,
    selectedPet: id,
  })),
  on(loadPets, (state) => ({
    ...state,
    isLoading: state.pets.length == 0,
  })),
  on(loadPetsSuccess, (state, { pets }) => ({
    ...state,
    isLoading: false,
    pets: pets,
  })),
  on(loadPetsFail, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(logout, (state) => ({
    ...state,
    pets: [],
  })),
  on(deletePet, (state, { id }) => ({
    ...state,
    pets: deletePetUtil(state.pets, id),
  }))
);
