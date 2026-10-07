"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {navigation} from "@/data/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  return <header className="refHeader"><div className="refNav">
    <Link href="/" className="refLogo" aria-label="Tamanho Eficaz — Home">
      <img src="/images/logo-tamanho-eficaz.png" alt="Tamanho Eficaz" width="170" height="76"/>
    </Link>
    <nav className="refMenu" aria-label="Navegação principal">
      {navigation.map(([href,label]) => <Link key={href} href={href}
        aria-current={pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined}>{label}</Link>)}
    </nav>
    <div className="refDesktopLanguage"><LanguageSwitcher compact/></div>
    <MobileMenu/>
  </div></header>;
}
