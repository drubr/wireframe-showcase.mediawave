import Logo from "../atoms/Logo/Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <div className="grid gap-1">
        <span className="h-1 w-6 rounded-full bg-gray-200"></span>
        <span className="h-1 w-6 rounded-full bg-gray-200"></span>
        <span className="h-1 w-6 rounded-full bg-gray-200"></span>
      </div>

      <Logo />

      <div className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-gray-200"></span>
        <span className="h-2 w-2 rounded-full bg-gray-200"></span>
        <span className="h-2 w-2 rounded-full bg-gray-200"></span>
      </div>
    </header>
  );
}
