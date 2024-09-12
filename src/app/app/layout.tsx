import { PropsWithChildren } from "react";
import { BackgroundPattern } from "~/components/petsoft/layout/background-pattern";
import { Footer } from "~/components/petsoft/layout/footer";
import { Header } from "~/components/petsoft/layout/header";
import { getPets } from "~/components/petsoft/pets/get-pets";
import DialogContextProvider from "~/context/dialog-context";
import PetContextProvider from "~/context/pet-context";

type AppLayoutProps = PropsWithChildren<never>;

export default async function AppLayout({
  children,
}: AppLayoutProps) {
  const pets = await getPets();

  return (
    <>
      <BackgroundPattern />
      <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col px-4 sm:px-6 lg:px-8">
        <Header />
        <PetContextProvider pets={pets}>
          <DialogContextProvider>
            {children}
          </DialogContextProvider>
        </PetContextProvider>
        <Footer />
      </div>
    </>
  );
}
