import Section from "@/components/layout/Section";
import ProductCard from "@/components/molecules/ProductCard/ProductCard";
import TextBlock from "@/components/molecules/TextBlock/TextBlock";
import PlaceholderImageTextBlock from "@/components/organisms/PlaceholderImageTextBlock/PlaceholderImageTextBlock";
import ProductListing from "@/components/organisms/ProductListing/ProductListing";

export default function PCP() {
  return (
    <main className="grid gap-16">
      <section className="grid gap-8">
        <div className="grid gap-4 px-8">
          <div className="h-11 w-80 rounded-full bg-gray-200"></div>
          <div className="h-5 w-56 rounded-2xl bg-gray-200"></div>
        </div>

        <div className="h-96 bg-gray-200"></div>
      </section>

      <Section>
        <ProductListing />
      </Section>

      <Section>
        <TextBlock />
      </Section>
    </main>
  );
}
