import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { PetFacade } from 'src/app/features/pet/pet.facade';

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.scss',
})
export class PetDetailComponent implements OnInit {
  petFacade = inject(PetFacade);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.petFacade.loadPet(this.route.snapshot.params['id']);
  }
}
