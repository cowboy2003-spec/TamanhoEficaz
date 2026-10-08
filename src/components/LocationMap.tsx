"use client";

import {useEffect, useState} from "react";

const address = "Tamanho Eficaz, Lda., R. Mercado 26 R/C, 3020-863 Souselas, Coimbra, Portugal";
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=14&t=m&output=embed`;

export default function LocationMap() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const sync = () => {
      try { setAllowed(JSON.parse(localStorage.getItem("te-cookie-consent-v1") || "null")?.choice === "all"); }
      catch { setAllowed(false); }
    };
    sync();
    window.addEventListener("te-cookie-consent", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("te-cookie-consent", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return <div className="refLocationMap">
    {allowed ? <iframe title="Google Maps — Tamanho Eficaz, Souselas, Coimbra" src={embedUrl}
      width="100%" height="100%" style={{border: 0}} loading="lazy"
      referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
      : <div className="refMapConsent">
        <p>Para visualizar o Google Maps, permita conteúdo externo nas preferências de cookies.</p>
        <button type="button" onClick={() => window.dispatchEvent(new Event("te-open-cookie-settings"))}>Preferências de cookies</button>
      </div>}
  </div>;
}
