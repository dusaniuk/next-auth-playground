import { Pet } from "@prisma/client";
import { cn } from "~/lib/utils";

export type PetDataProps = {
  pet: Pet;
  className?: string;
};

export function PetData({ pet, className }: PetDataProps) {
  const { ownerName, age } = pet;

  return (
    <section
      className={cn(
        "flex justify-around px-5 py-10 text-center",
        className,
      )}
    >
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">
          {ownerName}
        </p>
      </div>
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Age
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{age}</p>
      </div>
    </section>
  );
}
