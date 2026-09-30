"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileMenu(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  const close=()=>setOpen(false);
  return <div className="mobileNav">
    <button type="button" className="mobileToggle" aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?"×":"☰"}</button>
    {open&&<div className="mobilePanel" role="dialog" aria-modal="true" aria-label="Menu principal">
      <nav className="mobileLinks">
        <Link onClick={close} href="/empresa">Empresa</Link>
        <Link onClick={close} href="/servicos">Serviços</Link>
        <Link onClick={close} href="/projetos">Projetos</Link>
        <Link onClick={close} href="/internacional">Internacional</Link>
        <Link onClick={close} href="/noticias">Notícias</Link>
        <Link onClick={close} href="/trabalhe-connosco">Carreiras</Link>
        <Link onClick={close} href="/contactos">Contactos</Link>
      </nav>
      <div className="mobileMenuBottom"><LanguageSwitcher/><Link onClick={close} className="button" href="/pedir-proposta">Pedir proposta</Link></div>
    </div>}
  </div>
}
