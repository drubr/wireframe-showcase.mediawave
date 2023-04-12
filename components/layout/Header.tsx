export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <div className="grid gap-1">
        <span className="element h-1 w-6 rounded-full"></span>
        <span className="element h-1 w-6 rounded-full"></span>
        <span className="element h-1 w-6 rounded-full"></span>
      </div>

      <div className="element h-8 w-20 rounded-full"></div>

      <div className="flex gap-1">
        <span className="element h-2 w-2 rounded-full"></span>
        <span className="element h-2 w-2 rounded-full"></span>
        <span className="element h-2 w-2 rounded-full"></span>
      </div>
    </header>
  );
}
