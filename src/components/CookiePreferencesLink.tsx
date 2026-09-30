"use client";
import {useEffect,useState} from "react";
export default function CookiePreferencesLink(){
 const [en,setEn]=useState(false);
 useEffect(()=>setEn(localStorage.getItem("te-lang")==="en"),[]);
 return <button className="cookiePrefsLink" onClick={()=>window.dispatchEvent(new Event("te-open-cookie-settings"))}>{en?"Cookie preferences":"Preferências de cookies"}</button>
}
