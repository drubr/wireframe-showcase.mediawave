interface GridBlockProps {
  /** Set amount of columns you want to display. */
  columns: number;
  /** Set amount of items you want to display. */
  amount: number;
}

export default function GridBlock({
  columns = 3,
  amount = 16,
}: GridBlockProps) {
  let cols = "grid-cols-3";
  const gridItem = <div className="element h-44 w-full rounded-xl"></div>;

  return (
    <div className={`grid ${cols} gap-4`}>
      {Array.from(Array(amount).keys()).map((column) => gridItem)}
    </div>
  );
}
