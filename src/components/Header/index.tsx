"use client";

import * as S from "./style";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <S.Nav>
      <S.Ul>
        <S.Li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </S.Li>
        <S.Li>
          <Link href="/about">About</Link>
          {path === "/about" ? "🔥" : ""}
        </S.Li>
      </S.Ul>
    </S.Nav>
  );
};

export default Header;
