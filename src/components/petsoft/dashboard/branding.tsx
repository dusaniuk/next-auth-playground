import { Heading } from "~/components/ui/heading";

export function Branding() {
  return (
    <section>
      <Heading>
        Pet<span className="font-semibold">Soft</span>
      </Heading>
      <p className="text-lg opacity-80">Manage your pet daycare with ease</p>
    </section>
  );
}
