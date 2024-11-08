import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPIService } from '../base-api.service';
import { Pet } from './pet.entity';

@Injectable({
  providedIn: 'root',
})
export class PetService extends BaseAPIService {
  endpoint = '/pets';

  getPets(): Observable<Pet[]> {
    return this.performGet(this.endpoint);
  }
}
