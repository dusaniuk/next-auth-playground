import Image from "next/image";
import Link from "next/link";
import { Logo } from "~/components/petsoft/logo";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#5DC9A8] xl:flex-row">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="Preview of PetSoft"
        width={519}
        height={472}
      />
      <div>
        <Logo />
        <h1 className="my-6 max-w-[500px] text-5xl font-semibold">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="max-x-[600px] text-2xl font-medium">
          Use PetSoft to easily keep track of pets under your care. Get lifetime
          access for $299.
        </p>
        <div className="mt-10 space-x-4">
          <Button variant="default" asChild>
            <Link href="/signup">Get started</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
