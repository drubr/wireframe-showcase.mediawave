import HeroBlock from "@/components/molecules/HeroBlock";
import TextBlock from "@/components/molecules/TextBlock/TextBlock";
import Button from "@/components/atoms/Button/Button";
import Section from "@/components/layout/Section";

export default function Home() {
  return (
    <main className="grid gap-8">
      <Section>
        <HeroBlock />
      </Section>

      <Section>
        <TextBlock />
      </Section>

      <div className="mx-auto grid w-full max-w-screen-xl gap-4 px-8 xl:px-0">
        <div className="element h-44 w-full rounded-3xl"></div>
        <div className="flex w-full max-w-screen-xl items-end justify-end">
          <Button />
        </div>
      </div>
    </main>
  );
}
