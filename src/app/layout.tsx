import type {Metadata} from "next";
import "./globals.css";
import {Header,Footer} from "@/components/Layout";
import CookieBanner from "@/components/CookieBanner";
import EnglishOverlay from "@/components/EnglishOverlay";
export const metadata:Metadata={title:"Tamanho Eficaz | Indústria Metalomecânica",description:"Manutenção industrial e soluções metalomecânicas em Portugal e na Europa."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt"><body><EnglishOverlay/><Header/>{children}<Footer/><CookieBanner/></body></html>}
