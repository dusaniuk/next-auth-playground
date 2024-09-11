import { cn } from "~/lib/utils";

export type PetNotesProps = {
  className?: string;
  notes: string;
};

export function PetNotes({
  className,
  notes,
}: PetNotesProps) {
  return (
    <section
      className={cn(
        "border-light rounded-md border bg-white px-7 py-5",
        className
      )}
    >
      {notes}
    </section>
  );
}
