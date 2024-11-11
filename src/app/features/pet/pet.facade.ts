import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { deletePet, loadPet, loadPets, updatePet } from './pet.actions';
import { isProcessing, selectedPet, selectPets } from './pet.selectors';

@Injectable({
  providedIn: 'root',
})
export class PetFacade {
  pets$;
  selectedPet$;
  isProcessing$;

  constructor(private store: Store) {
    this.pets$ = this.store.select(selectPets);
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
}
