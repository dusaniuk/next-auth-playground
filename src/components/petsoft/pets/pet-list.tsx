"use client";

import Image from "next/image";
import { usePetContext } from "~/context/pet-context";
import { cn } from "~/lib/utils";

export function PetList() {
  const { pets, selectedPet, selectPetById } =
    usePetContext();

  const handleSelectPetClick = (id: number) => {
    return () => {
      selectPetById(id);
    };
  };

  return (
    <ul className="border-light border-b bg-white">
      {pets.map((pet) => (
        <li key={pet.id}>
          <button
            className={cn(
              "flex h-[70px] w-full cursor-pointer items-center gap-x-3 px-5 text-base transition-colors hover:bg-[#EFF1F2] focus:bg-[#EFF1F2]",
              { "bg-[#EFF1F2]": selectedPet?.id === pet.id }
            )}
            onClick={handleSelectPetClick(pet.id)}
          >
            <Image
              src={pet.imageUrl}
              alt="Pet image"
              width={45}
              height={45}
              className="h-[45px] w-[45px] rounded-full object-cover"
            />
            <p className="font-semibold">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
