import { Branding } from "~/components/petsoft/dashboard/branding";
import { SearchForm } from "~/components/petsoft/dashboard/search-form";
import { Stats } from "~/components/petsoft/dashboard/stats";
import { PetDetails } from "~/components/petsoft/pets/pet-details";
import { PetList } from "~/components/petsoft/pets/pet-list";
import { Card } from "~/components/ui/card";

export default async function DashboardPage() {
  return (
    <main>
      <div className="flex items-center justify-between py-8 text-white">
        <Branding />
        <Stats />
      </div>
      <div className="grid-col-1 grid grid-rows-[45px_300px_500px] gap-4 md:h-[600px] md:grid-cols-3 md:grid-rows-[45px_1fr]">
        <SearchForm className="md:col-span-1 md:col-start-1 md:row-span-1 md:row-start-1" />

        <Card className="md:col-span-1 md:col-start-1 md:row-span-full md:row-start-2">
          <PetList />
        </Card>

        <Card className="md:col-span-full md:col-start-2 md:row-span-full md:row-start-1">
          <PetDetails />
        </Card>
      </div>
    </main>
  );
}
