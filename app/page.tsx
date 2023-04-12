import HeroBlock from "@/components/blocks/HeroBlock";
import TextBlock from "@/components/blocks/TextBlock";
import CTA from "@/components/ui/CTA";

export default function Home() {
  return (
    <main className="grid gap-8">
      <HeroBlock />

      <TextBlock />

      <div className="mx-auto grid w-full max-w-screen-xl gap-4 px-8 xl:px-0">
        <div className="element h-44 w-full rounded-3xl"></div>
        <div className="flex w-full max-w-screen-xl items-end justify-end">
          <CTA />
        </div>
      </div>
    </main>
  );
}
