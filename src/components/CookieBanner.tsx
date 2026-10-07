"use client";
import {useEffect,useState} from "react";
import Link from "next/link";

type Consent="all"|"necessary";
type Lang="pt"|"en";
const KEY="te-cookie-consent-v1";

export default function CookieBanner(){
 const [visible,setVisible]=useState(false);
 const [manage,setManage]=useState(false);
 const [lang,setLang]=useState<Lang>("pt");

 useEffect(()=>{
   setLang((localStorage.getItem("te-lang")==="en"?"en":"pt"));
   setVisible(!localStorage.getItem(KEY));
   const open=()=>{setVisible(true);setManage(true)};
   window.addEventListener("te-open-cookie-settings",open);
   return()=>window.removeEventListener("te-open-cookie-settings",open);
 },[]);

 const save=(v:Consent)=>{
   localStorage.setItem(KEY,JSON.stringify({choice:v,date:new Date().toISOString()}));
   setVisible(false); setManage(false);
   window.dispatchEvent(new CustomEvent("te-cookie-consent",{detail:v}));
 };
 if(!visible)return null;

 const en=lang==="en";
 return <div className="cookieBackdrop"><div className="cookiePanel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
  <div>
   <div className="eyebrow">{en?"PRIVACY":"PRIVACIDADE"}</div>
   <h2 id="cookie-title">{en?"Cookies and privacy":"Cookies e privacidade"}</h2>
   <p>{en
    ?"We use storage that is strictly necessary for the website to operate and remember your preferences. Optional analytics or marketing cookies may only be activated with your consent."
    :"Utilizamos armazenamento estritamente necessário ao funcionamento do website e às suas preferências. Cookies opcionais de análise ou marketing só poderão ser ativados com o seu consentimento."}</p>
   {manage&&<div className="cookieChoices">
    <div><strong>{en?"Necessary":"Necessários"}</strong><span>{en?"Always active — preferences, security and website operation.":"Sempre ativos — preferências, segurança e funcionamento do site."}</span></div>
    <div><strong>{en?"Optional":"Opcionais"}</strong><span>{en?"External content: Google Maps on the Contacts page, loaded only with consent.":"Conteúdo externo: Google Maps na página Contactos, carregado apenas com consentimento."}</span></div>
   </div>}
   <p className="cookieLinks"><Link href="/cookies">{en?"Cookie Policy":"Política de Cookies"}</Link> · <Link href="/privacidade">{en?"Privacy Policy":"Política de Privacidade"}</Link></p>
  </div>
  <div className="cookieActions">
   <button className="cookieSecondary" onClick={()=>save("necessary")}>{en?"Reject optional cookies":"Rejeitar opcionais"}</button>
   <button className="cookieSecondary" onClick={()=>setManage(!manage)}>{en?"Manage preferences":"Gerir preferências"}</button>
   <button className="button" onClick={()=>save("all")}>{en?"Accept all":"Aceitar todos"}</button>
  </div>
 </div></div>
}
