"use client";
import { Pet } from "@prisma/client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { noop } from "~/lib/utils";

type PetContextType = {
  pets: Pet[];
  searchTerm: string;
  selectedPet: Pet | null;
  addPet: (pet: Omit<Pet, "id">) => void;
  editPet: (pet: Pet) => void;
  checkoutPet: (id: Pet["id"]) => void;
  selectPetById: (id: Pet["id"]) => void;
  searchPet: (searchTerm: string) => void;
};

const PetContext = createContext<PetContextType>({
  pets: [],
  searchTerm: "",
  selectedPet: null,
  addPet: noop,
  editPet: noop,
  checkoutPet: noop,
  searchPet: noop,
  selectPetById: noop,
});

export function usePetContext() {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error(
      "usePetContext must be used within a PetContextProvider",
    );
  }

  return context;
}

export type PetContextProviderProps = PropsWithChildren<{
  pets: Pet[];
}>;

export default function PetContextProvider({
  pets: petsProp,
  children,
}: PetContextProviderProps) {
  const [pets, setPets] = useState<Pet[]>(petsProp);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedPetId, setSelectedPetId] = useState<
    Pet["id"] | null
  >(null);

  const handleAddPet = useCallback(
    (newPet: Omit<Pet, "id">) => {
      setPets((prev) => [
        ...prev,
        {
          id: new Date().toISOString(),
          ...newPet,
        },
      ]);
    },
    [],
  );

  const handleEditPet = useCallback((pet: Pet) => {
    setPets((prev) =>
      prev.map((existingPet) =>
        existingPet.id === pet.id ? pet : existingPet,
      ),
    );
  }, []);

  const handleCheckoutPet = useCallback((id: Pet["id"]) => {
    setPets((prev) => prev.filter((pet) => pet.id !== id));
  }, []);

  const handleSelectPetById = useCallback(
    (id: Pet["id"]) => {
      setSelectedPetId(id);
    },
    [],
  );

  const handleSetSearchTerm = useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm);
    },
    [],
  );

  const contextValue = useMemo<PetContextType>(
    () => ({
      searchTerm,
      pets: pets.filter((pet) =>
        pet.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      ),
      addPet: handleAddPet,
      editPet: handleEditPet,
      checkoutPet: handleCheckoutPet,
      selectPetById: handleSelectPetById,
      searchPet: handleSetSearchTerm,
      selectedPet: selectedPetId
        ? (pets.find((pet) => pet.id === selectedPetId) ??
          null)
        : null,
    }),
    [
      handleAddPet,
      handleCheckoutPet,
      handleEditPet,
      handleSelectPetById,
      handleSetSearchTerm,
      pets,
      searchTerm,
      selectedPetId,
    ],
  );

  return (
    <PetContext.Provider value={contextValue}>
      {children}
    </PetContext.Provider>
  );
}
