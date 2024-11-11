import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addPet, deletePet, loadPet, loadPets, updatePet } from './pet.actions';
import {
  isProcessing,
  petCount,
  selectedPet,
  selectPets,
} from './pet.selectors';

@Injectable({
  providedIn: 'root',
})
export class PetFacade {
  pets$;
  petCount$;
  selectedPet$;
  isProcessing$;

  constructor(private store: Store) {
    this.pets$ = this.store.select(selectPets);
    this.petCount$ = this.store.select(petCount);
    this.selectedPet$ = this.store.select(selectedPet);
    this.isProcessing$ = this.store.select(isProcessing);
  }

  loadPet(id: number) {
    this.store.dispatch(loadPet({ id }));
  }

  loadPets() {
    this.store.dispatch(loadPets());
  }

  deletePet(id: number) {
    this.store.dispatch(deletePet({ id }));
  }

  updatePet(name: string, age: number, species: string) {
    this.store.dispatch(updatePet({ name, age, species }));
  }

  addPet() {
    this.store.dispatch(addPet());
  }
}
