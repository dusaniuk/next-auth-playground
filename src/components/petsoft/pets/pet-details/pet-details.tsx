"use client";

import { usePetContext } from "~/context/pet-context";
import { PetData } from "./pet-data";
import { PetDetailsHeader } from "./pet-details-header";
import { PetNotes } from "./pet-notes";

export function PetDetails() {
  const { selectedPet } = usePetContext();

  if (!selectedPet) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-xl font-medium">
          Select a pet to view its details
        </p>
      </div>
    );
  }

  return (
    <section className="flex h-full flex-col">
      <PetDetailsHeader pet={selectedPet} />

      <PetData pet={selectedPet} />

      <PetNotes
        className="mx-8 mb-9 flex-1"
        notes={selectedPet.notes}
      />
    </section>
  );
}
