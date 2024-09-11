"use client";

import { FormEvent } from "react";
import { usePetContext } from "~/context/pet-context";

export type SearchFormProps = {
  className?: string;
};

export function SearchForm({ className }: SearchFormProps) {
  const { searchTerm, searchPet } = usePetContext();

  function handleSearch(
    event: FormEvent<HTMLInputElement>
  ) {
    event.preventDefault();
    searchPet(event.currentTarget.value);
  }

  return (
    <form className={className}>
      <input
        className="h-full w-full rounded-md bg-white/20 px-5 outline-none transition placeholder:text-black/50 hover:bg-white/30 focus:bg-white/50"
        placeholder="Search for a pet"
        type="search"
        value={searchTerm}
        onChange={handleSearch}
      />
    </form>
  );
}
