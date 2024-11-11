import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { filter, take, tap } from 'rxjs';
import { PetFacade } from 'src/app/features/pet/pet.facade';

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.scss',
})
export class PetDetailComponent implements OnInit {
  petFacade = inject(PetFacade);
  route = inject(ActivatedRoute);

  formHydrator = this.petFacade.selectedPet$.pipe(
    filter((pet) => !!pet),
    take(1),
    tap((pet) => {
      this.form.patchValue({ name: pet.name });
      this.form.patchValue({ age: pet.age });
      this.form.patchValue({ species: pet.type });
    })
  );

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    species: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.petFacade.loadPet(this.route.snapshot.params['id']);
    this.formHydrator.subscribe();
  }

  updatePet() {
    if (this.form.valid) {
      this.petFacade.updatePet(
        this.form.value['name'] ?? '',
        this.form.value['age'] ?? 0,
        this.form.value['species'] ?? ''
      );
    }
  }
}
