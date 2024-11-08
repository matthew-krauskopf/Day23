import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPet, loadPets } from './pet.actions';
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
    console.log('Loading ' + id);
    this.store.dispatch(loadPet({ id }));
  }

  loadPets() {
    this.store.dispatch(loadPets());
  }
}
