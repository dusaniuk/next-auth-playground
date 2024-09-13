"use server";

import { Pet } from "@prisma/client";
import { prisma } from "~/lib/db";

export async function addPet(
  data: Omit<Pet, "id" | "createdAt" | "updatedAt">,
) {
  return prisma.pet.create({
    data,
  });
}
