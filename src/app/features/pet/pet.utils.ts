import { Pet } from './pet.entity';

export function mapPhotos(pets: Pet[]) {
  return pets.map((p) => {
    return { ...p, photo: `${p.id}.jpg` };
  });
}

export function deletePetUtil(pets: Pet[], id: number) {
  return pets.map((p) => {
    return { ...p, deleted: p.deleted || p.id == id };
  });
}
