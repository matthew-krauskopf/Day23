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

export function updatePetUtil(
  pets: Pet[],
  id: number | null | undefined,
  name: string,
  age: number,
  species: string
): Pet[] {
  console.log('Updating ' + id);

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
