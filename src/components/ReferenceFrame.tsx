"use client";

import {usePathname} from "next/navigation";
import {Header, Footer} from "./Layout";
import {navigation} from "@/data/navigation";

export default function ReferenceFrame({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const reference = navigation.some(([href]) => pathname === href);
  if (!reference) return <><Header/>{children}<Footer showCta={pathname!=="/"}/></>;
  return <div className="referenceSite"><Header/>{children}<Footer/></div>;
}
