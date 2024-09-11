"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { Pet } from "~/lib/types";

type PetContextType = {
  pets: Pet[];
  selectedPet: Pet | null;
  selectPetById: (id: number) => void;
};

const PetContext = createContext<PetContextType>({
  pets: [],
  selectedPet: null,
  selectPetById: () => {},
});

export function usePetContext() {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error("usePetContext must be used within a PetContextProvider");
  }

  return context;
}

export type PetContextProviderProps = PropsWithChildren<{
  pets: Pet[];
}>;

export default function PetContextProvider({
  pets,
  children,
}: PetContextProviderProps) {
  const [selectedPetId, setSelectedPetId] = useState<number | null>(null);

  const handleSelectPetById = (id: number) => {
    setSelectedPetId(id);
  };

  const contextValue = useMemo<PetContextType>(
    () => ({
      pets,
      selectPetById: handleSelectPetById,
      selectedPet: selectedPetId
        ? (pets.find((pet) => pet.id === selectedPetId) ?? null)
        : null,
    }),
    [pets, selectedPetId]
  );

  return (
    <PetContext.Provider value={contextValue}>{children}</PetContext.Provider>
  );
}
