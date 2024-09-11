"use client";

import { usePetContext } from "~/context/pet-context";

export function Stats() {
  const { pets } = usePetContext();

  const totalPets = pets.length;

  return (
    <section className="text-center">
      <p className="text-2xl font-bold leading-6">
        {totalPets}
      </p>
      <p className="opacity-80">Current guests</p>
    </section>
  );
}
