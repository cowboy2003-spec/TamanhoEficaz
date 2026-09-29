"use client";
import {useEffect,useState} from "react";

export default function LanguageSwitcher(){
  const [lang,setLang]=useState<"pt"|"en">("pt");
  useEffect(()=>{ const saved=(localStorage.getItem("te-lang")||"pt") as "pt"|"en"; setLang(saved); document.documentElement.lang=saved; },[]);
  function change(next:"pt"|"en"){ localStorage.setItem("te-lang",next); document.cookie=`te-lang=${next}; path=/; max-age=31536000; samesite=lax`; window.location.reload(); }
  return <div className="langSwitch" aria-label="Idioma / Language">
    <button className={lang==="pt"?"langActive":""} onClick={()=>change("pt")} aria-label="Português" title="Português"><span className="flag">🇵🇹</span></button>
    <button className={lang==="en"?"langActive":""} onClick={()=>change("en")} aria-label="English" title="English"><span className="flag">🇬🇧</span></button>
  </div>
}
