import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PetFacade } from '@org/pet-lib';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.scss',
})
export class PetListComponent {
  petFacade = inject(PetFacade);
}
