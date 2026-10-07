"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import {usePathname} from "next/navigation";
import {navigation} from "@/data/navigation";

export default function MobileMenu(){
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  const close=()=>setOpen(false);
  return <div className="mobileNav">
    <button type="button" className="mobileToggle" aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?"×":"☰"}</button>
    {open&&<div className="mobilePanel" role="dialog" aria-modal="true" aria-label="Menu principal">
      <nav className="mobileLinks">
        {navigation.map(([href,label]) => <Link key={href} onClick={close} href={href}
          aria-current={pathname===href || pathname.startsWith(`${href}/`) ? "page" : undefined}>{label}</Link>)}
      </nav>
      <div className="mobileMenuBottom"><LanguageSwitcher compact/></div>
    </div>}
  </div>
}
