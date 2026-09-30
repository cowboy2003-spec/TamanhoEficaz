"use client";
export default function CookiePreferencesLink(){return <button className="cookiePrefsLink" onClick={()=>window.dispatchEvent(new Event("te-open-cookie-settings"))}>Preferências de cookies</button>}
