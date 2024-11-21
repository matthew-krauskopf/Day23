import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { loginSuccessful } from '@org/auth-lib';
import {
  addPet,
  deletePet,
  loadPet,
  loadPetsFail,
  loadPetsSuccess,
  updatePet,
} from './pet.actions';
import { Pet } from './pet.entity';
import { PetService } from './pet.service';

@Injectable()
export class PetEffects {
  petsService: PetService = inject(PetService);
  snackbar: MatSnackBar = inject(MatSnackBar);
  router: Router = inject(Router);

  constructor(private actions$: Actions) {}

  loadPet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadPet),
        tap((payload) =>
          this.router.navigate(['dashboard', 'pets', payload.id])
        )
      ),
    { dispatch: false }
  );

  loadPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccessful),
      exhaustMap(() =>
        this.petsService.getPets().pipe(
          map((pets: Pet[]) => loadPetsSuccess({ pets: pets })),
          catchError(() => of(loadPetsFail()))
        )
      )
    )
  );

  loadPetsFailed$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadPetsFail),
        map(() =>
          this.snackbar.open('Network Error: Pets failed to load', 'Dismiss', {
            duration: 5000,
          })
        )
      ),
    { dispatch: false }
  );

  addPet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addPet),
        map(() =>
          this.snackbar.open('Pet successfully created', 'Dismiss', {
            duration: 5000,
          })
        )
      ),
    { dispatch: false }
  );

  updatePet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updatePet),
        map(() =>
          this.snackbar.open('Pet successfully updated', 'Dismiss', {
            duration: 5000,
          })
        )
      ),
    { dispatch: false }
  );

  deletePet$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deletePet),
        map(() =>
          this.snackbar.open('Pet successfully deleted', 'Dismiss', {
            duration: 5000,
          })
        )
      ),
    { dispatch: false }
  );

  routeToPetList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deletePet, updatePet),
        tap(() => this.router.navigate(['dashboard', 'pets']))
      ),
    { dispatch: false }
  );
}
