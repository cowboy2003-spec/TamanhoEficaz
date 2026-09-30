"use client";
import {useEffect,useState} from "react";
import Link from "next/link";

type Consent="all"|"necessary";
const KEY="te-cookie-consent-v1";
export default function CookieBanner(){
 const [visible,setVisible]=useState(false); const [manage,setManage]=useState(false);
 useEffect(()=>{setVisible(!localStorage.getItem(KEY)); const open=()=>{setVisible(true);setManage(true)}; window.addEventListener("te-open-cookie-settings",open); return()=>window.removeEventListener("te-open-cookie-settings",open)},[]);
 const save=(v:Consent)=>{localStorage.setItem(KEY,JSON.stringify({choice:v,date:new Date().toISOString()}));setVisible(false);setManage(false);window.dispatchEvent(new CustomEvent("te-cookie-consent",{detail:v}))};
 if(!visible)return null;
 return <div className="cookieBackdrop"><div className="cookiePanel" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
  <div><div className="eyebrow">PRIVACIDADE</div><h2 id="cookie-title">Cookies e privacidade</h2><p>Utilizamos armazenamento estritamente necessário ao funcionamento do website e às suas preferências. Cookies opcionais de análise ou marketing só poderão ser ativados com o seu consentimento.</p>{manage&&<div className="cookieChoices"><div><strong>Necessários</strong><span>Sempre ativos — preferências, segurança e funcionamento do site.</span></div><div><strong>Opcionais</strong><span>Atualmente não são utilizados cookies de análise, publicidade ou perfilagem.</span></div></div>}<p className="cookieLinks"><Link href="/cookies">Política de Cookies</Link> · <Link href="/privacidade">Política de Privacidade</Link></p></div>
  <div className="cookieActions"><button className="cookieSecondary" onClick={()=>save("necessary")}>Rejeitar opcionais</button><button className="cookieSecondary" onClick={()=>setManage(!manage)}>Gerir preferências</button><button className="button" onClick={()=>save("all")}>Aceitar todos</button></div>
 </div></div>
}
