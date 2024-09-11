"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Pet } from "~/lib/types";

type PetContextType = {
  pets: Pet[];
  searchTerm: string;
  selectedPet: Pet | null;
  selectPetById: (id: number) => void;
  searchPet: (searchTerm: string) => void;
};

const PetContext = createContext<PetContextType>({
  pets: [],
  searchTerm: "",
  selectedPet: null,
  searchPet: () => {},
  selectPetById: () => {},
});

export function usePetContext() {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error(
      "usePetContext must be used within a PetContextProvider"
    );
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
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedPetId, setSelectedPetId] = useState<
    number | null
  >(null);

  const handleSelectPetById = useCallback((id: number) => {
    setSelectedPetId(id);
  }, []);

  const handleSetSearchTerm = useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm);
    },
    []
  );

  const contextValue = useMemo<PetContextType>(
    () => ({
      searchTerm,
      pets: pets.filter((pet) =>
        pet.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ),
      selectPetById: handleSelectPetById,
      searchPet: handleSetSearchTerm,
      selectedPet: selectedPetId
        ? (pets.find((pet) => pet.id === selectedPetId) ??
          null)
        : null,
    }),
    [
      handleSelectPetById,
      handleSetSearchTerm,
      pets,
      searchTerm,
      selectedPetId,
    ]
  );

  return (
    <PetContext.Provider value={contextValue}>
      {children}
    </PetContext.Provider>
  );
}
