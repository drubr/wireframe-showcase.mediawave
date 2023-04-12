import TextBlock from "@/components/molecules/TextBlock/TextBlock";
import Button from "@/components/atoms/Button/Button";
import Section from "@/components/layout/Section";

export default function Home() {
  return (
    <main className="grid gap-8">
      <Section>
        <div className="h-[45vh] w-full rounded-3xl bg-gray-200"></div>
      </Section>

      <Section>
        <TextBlock />
      </Section>

      <Section>
        <div className="h-44 w-full rounded-3xl bg-gray-200"></div>
        <div className="flex w-full max-w-screen-xl items-end justify-end">
          <Button />
        </div>
      </Section>
    </main>
  );
}
