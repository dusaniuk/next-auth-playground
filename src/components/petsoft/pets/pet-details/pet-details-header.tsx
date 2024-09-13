import { Pet } from "@prisma/client";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { useDialogContext } from "~/context/dialog-context";
import { usePetContext } from "~/context/pet-context";
import { cn } from "~/lib/utils";
import { PetFormDialogContent } from "../pet-form-dialog-content";

export type PetDetailsHeaderProps = {
  pet: Pet;
  className?: string;
};

export function PetDetailsHeader({
  pet,
  className,
}: PetDetailsHeaderProps) {
  const { id, name, imageUrl } = pet;

  const { openDialog } = useDialogContext();
  const { checkoutPet } = usePetContext();

  function handleEditClick() {
    openDialog(PetFormDialogContent, { pet });
  }

  function handleCheckout() {
    checkoutPet(id);
  }

  return (
    <section
      className={cn(
        "flex items-center border-b border-light bg-white px-8 py-5",
        className,
      )}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={75}
        height={75}
        className="h-[75px] w-[75px] rounded-full object-cover"
      />

      <h2 className="ml-5 text-3xl font-semibold leading-7">
        {name}
      </h2>

      <div className="ml-auto flex gap-x-3">
        <Button
          variant="secondary"
          onClick={handleEditClick}
        >
          Edit
        </Button>
        <Button
          variant="secondary"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
    </section>
  );
}
