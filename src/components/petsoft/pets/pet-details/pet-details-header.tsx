import Image from "next/image";
import { cn } from "~/lib/utils";

export type PetDetailsHeaderProps = {
  imageUrl: string;
  name: string;
  className?: string;
};

export function PetDetailsHeader({
  imageUrl,
  name,
  className,
}: PetDetailsHeaderProps) {
  return (
    <section
      className={cn(
        "border-light flex items-center border-b bg-white px-8 py-5",
        className
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
    </section>
  );
}
