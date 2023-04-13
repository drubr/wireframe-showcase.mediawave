import PlaceholderImage from "@/components/atoms/PlaceholderImage/PlaceholderImage";
import TextBlock from "@/components/molecules/TextBlock/TextBlock";

interface ImageTextBlockProps {
  showCallToAction?: boolean;
}

export default function PlaceholderImageTextBlock({
  showCallToAction = true,
}: ImageTextBlockProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <PlaceholderImage />
      <TextBlock showCallToAction={showCallToAction} />
    </div>
  );
}
