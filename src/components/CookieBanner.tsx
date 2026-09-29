"use client";
import {useEffect,useState} from "react";
import Link from "next/link";

export default function CookieBanner(){
  const [visible,setVisible]=useState(false);
  useEffect(()=>{setVisible(localStorage.getItem("te-cookie-notice")!=="accepted")},[]);
  if(!visible)return null;
  return <div className="cookieBanner" role="dialog" aria-label="Informação sobre cookies">
    <div><strong>Privacidade e cookies</strong><p>Este site utiliza apenas armazenamento estritamente necessário ao funcionamento e às preferências da demonstração. Consulte a nossa <Link href="/cookies">Política de Cookies</Link> e a <Link href="/privacidade">Política de Privacidade</Link>.</p></div>
    <button onClick={()=>{localStorage.setItem("te-cookie-notice","accepted");setVisible(false)}}>Compreendi</button>
  </div>
}
