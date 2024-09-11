import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export type AccountCardProps = {
  className?: string;
};

export function AccountCard({
  className,
}: AccountCardProps) {
  return (
    <Card
      className={cn(
        "flex items-center justify-center p-4",
        className,
      )}
    >
      <p>Logged in as ...</p>
    </Card>
  );
}
