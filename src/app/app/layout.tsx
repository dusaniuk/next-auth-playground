import { PropsWithChildren } from "react";
import { BackgroundPattern } from "~/components/petsoft/layout/background-pattern";
import { Footer } from "~/components/petsoft/layout/footer";
import { Header } from "~/components/petsoft/layout/header";

type AppLayoutProps = PropsWithChildren<never>;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <BackgroundPattern />
      <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col px-4 sm:px-6 lg:px-8">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
