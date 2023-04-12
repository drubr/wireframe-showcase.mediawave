import PlaceholderImage from "@/components/atoms/PlaceholderImage/PlaceholderImage";
import TextBlock from "@/components/molecules/TextBlock/TextBlock";

interface ImageTextBlockProps {
  showCTA?: boolean;
}

export default function PlaceholderImageTextBlock({
  showCTA = true,
}: ImageTextBlockProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <PlaceholderImage />
      <TextBlock showCTA={showCTA} />
    </div>
  );
}
