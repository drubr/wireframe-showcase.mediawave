import Button from "@/components/atoms/Button/Button";

export default function ProductBox() {
  return (
    <div className="group relative grid w-full max-w-[26.875rem] cursor-pointer gap-4">
      <div className="h-80 rounded-3xl bg-gray-200 transition group-hover:bg-gray-300"></div>

      <div className="grid gap-4">
        <div className="h-11 w-56 rounded-2xl bg-gray-200"></div>
        <div className="h-5 w-28 rounded-2xl bg-gray-200"></div>
      </div>

      <div className="invisible absolute bottom-0 flex w-full translate-y-1/2 justify-end opacity-0 transition-all duration-[240ms] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <Button />
      </div>
    </div>
  );
}
