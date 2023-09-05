import { useGlobalContext } from "@/context/ContextProvider";
import Link from "next/link";

const SecondaryHeader = () => {
  const { fontSize, setFontSize } = useGlobalContext();
  return (
    <header class="bg-gray-800 text-white p-4">
      <nav class="container mx-auto flex items-center flex-wrap gap-5 w-full">
        <Link
          href="?person=100"
          class="text-sm font-semibold hover:text-slate-200"
        >
          Jump to 100
        </Link>
        <Link
          href="?person=200"
          class="text-sm font-semibold hover:text-slate-200"
        >
          Jump to 200
        </Link>
        <Link
          href="?person=400"
          class="text-sm font-semibold hover:text-slate-200"
        >
          Jump to 400
        </Link>
        <Link
          href="?person=800"
          class="text-sm font-semibold hover:text-slate-200"
        >
          Jump to 800
        </Link>
        <Link
          href="?person=1600"
          class="text-sm font-semibold hover:text-slate-200"
        >
          Jump to 1600
        </Link>
        <div className="ml-auto flex items-center gap-x-2">
          {/* <p>FONT: </p>
            <input
              type="range"
              class=""
              defaultValue={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            /> */}
        </div>
      </nav>
    </header>
  );
};

export default SecondaryHeader;
