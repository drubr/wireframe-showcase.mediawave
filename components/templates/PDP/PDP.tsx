import Section from "@/components/layout/Section";
import ProductBox from "@/components/molecules/ProductBox/ProductBox";
import TextBlock from "@/components/molecules/TextBlock/TextBlock";
import PlaceholderImageTextBlock from "@/components/organisms/PlaceholderImageTextBlock/PlaceholderImageTextBlock";
import Tabs from "@/components/organisms/Tabs/Tabs";

export default function PDP() {
  return (
    <main className="grid gap-16">
      <Section>
        <PlaceholderImageTextBlock />
      </Section>

      <Section>
        <TextBlock />
      </Section>

      <Section>
        <Tabs />
      </Section>

      <Section>
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6).keys()].map((_, index) => (
            <li key={index}>
              <ProductBox />
            </li>
          ))}
        </ul>
      </Section>

      <Section className="grid gap-4">
        <div className="h-96 rounded-2xl bg-gray-200"></div>

        <div className="grid grid-cols-2 gap-4">
          <div className="h-64 rounded-2xl bg-gray-200"></div>
          <div className="h-64 rounded-2xl bg-gray-200"></div>
        </div>
      </Section>
    </main>
  );
}
