"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <>
      <h1>Next Cinema</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
            {path === "/" ? "🔥" : ""}
          </li>
          <li>
            <Link href="/about">About</Link>
            {path === "/about" ? "🔥" : ""}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
