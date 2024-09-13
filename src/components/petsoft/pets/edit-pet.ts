"use server";

import { Pet } from "@prisma/client";
import { prisma } from "~/lib/db";

export async function editPet(
  id: Pet["id"],
  data: Omit<Pet, "id" | "createdAt" | "updatedAt">,
) {
  return prisma.pet.update({
    where: { id },
    data,
  });
}
