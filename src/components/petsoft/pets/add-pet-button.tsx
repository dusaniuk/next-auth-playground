"use client";

import {
  Button,
  ButtonProps,
} from "~/components/ui/button";
import { useDialogContext } from "~/context/dialog-context";
import { PetFormDialogContent } from "./pet-form-dialog-content";

export type AddPetButtonProps = Pick<
  ButtonProps,
  "variant" | "size" | "children" | "className"
>;

export function AddPetButton({
  ...otherProps
}: AddPetButtonProps) {
  const { openDialog } = useDialogContext();

  function handleAddPet() {
    openDialog(PetFormDialogContent, {});
  }

  return <Button onClick={handleAddPet} {...otherProps} />;
}
