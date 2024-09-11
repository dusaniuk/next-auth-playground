import { Pet } from "~/lib/types";

export async function getPets() {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/petsoft/api/pets"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch pets");
  }

  const data = await response.json();
  return data as Pet[];
}
