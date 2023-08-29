import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header class="bg-gray-900 text-white p-4">
      <nav class="container mx-auto flex  items-center gap-x-5">
        <Link href="/" class="text-xl font-semibold">
          Home
        </Link>
        <Link href="/virtuoso" class="ml-4">
          Virtuoso
        </Link>
        <Link href="/virtuoso-list" class="ml-4">
          Virtuoso-list
        </Link>
      </nav>
    </header>
  );
};

export default Header;
