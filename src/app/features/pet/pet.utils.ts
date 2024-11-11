import { Pet } from './pet.entity';

export function addPetUtil(pets: Pet[]) {
  const newPet: Pet = {
    id:
      pets.map((p) => p.id).reduce((max, a) => (max = a > max ? a : max), 0) +
      1,
    name: 'New Pet',
    age: 0,
    type: 'unknown',
    inMemory: true,
  };

  return [...pets, newPet];
}

export function mapPhotos(pets: Pet[]) {
  return pets.map((p) => {
    return { ...p, photo: p.inMemory ? 'default.jpg' : `${p.id}.jpg` };
  });
}

export function deletePetUtil(pets: Pet[], id: number) {
  return pets.map((p) => {
    return { ...p, deleted: p.deleted || p.id == id };
  });
}

export function updatePetUtil(
  pets: Pet[],
  id: number | null | undefined,
  name: string,
  age: number,
  species: string
): Pet[] {
  if (!id) return pets;

  const toUpdate = pets.find((p) => p.id == id);
  if (!toUpdate) return pets;

  return [
    ...pets.filter((p) => p.id != id),
    {
      ...toUpdate,
      name: name,
      age: age,
      type: species,
    },
  ];
}
