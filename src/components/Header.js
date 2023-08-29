import { useGlobalContext } from "@/context/ContextProvider";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { fontSize, setFontSize } = useGlobalContext();
  return (
    <header class="bg-gray-900 text-white p-4">
      <nav class="container mx-auto flex items-center flex-wrap gap-5 w-full">
        <Link href="/" class="text-xl font-semibold">
          Home
        </Link>
        <Link href="/virtuoso" class="ml-4">
          Virtuoso
        </Link>
        <Link href="/virtuoso-list" class="ml-4">
          Virtuoso-list
        </Link>
        <Link href="/without-virtuoso-list" class="ml-4">
          without-virtuoso-list
        </Link>
        <div className="ml-auto flex items-center gap-x-2">
          <p>FONT: </p>
          <input
            type="range"
            class=""
            defaultValue={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
