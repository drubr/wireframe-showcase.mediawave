import Section from "@/components/layout/Section";
import TextBlock from "@/components/molecules/TextBlock/TextBlock";
import ImageSlider from "@/components/organisms/ImageSlider/ImageSlider";
import ProductCarousel from "@/components/organisms/ProductCarousel/ProductCarousel";

export default function Home() {
  return (
    <main className="grid gap-16">
      <Section>
        <div className="h-96 rounded-2xl bg-gray-200"></div>
      </Section>

      <Section>
        <TextBlock showCallToAction={true} callToActionLink="/pcp" />
      </Section>

      <Section className="grid gap-4">
        <div className="h-96 rounded-2xl bg-gray-200"></div>
        <div className="h-11 w-full max-w-xs rounded-xl bg-gray-200"></div>
      </Section>

      <Section>
        <ProductCarousel />
      </Section>

      <Section>
        <ImageSlider />
      </Section>

      <Section>
        <TextBlock showCallToAction={false} />
      </Section>
    </main>
  );
}
