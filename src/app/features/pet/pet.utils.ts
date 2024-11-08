import { Pet } from './pet.entity';

export function mapPhotos(pets: Pet[]) {
  return pets.map((p) => {
    return { ...p, photo: `${p.id}.jpg` };
  });
}
