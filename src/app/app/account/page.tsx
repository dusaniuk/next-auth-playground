import { AccountCard } from "~/components/petsoft/account/account-card";
import { Heading } from "~/components/ui/heading";

export default function AccountPage() {
  return (
    <main>
      <Heading className="mt-8 text-white">
        Your Account
      </Heading>
      <AccountCard className="mt-10 h-[500px]" />
    </main>
  );
}
