import type {Metadata} from "next";
import "./globals.css";
import "./v5-legacy.css";
import "./redesign.css";
import ReferenceFrame from "@/components/ReferenceFrame";
import CookieBanner from "@/components/CookieBanner";
import EnglishOverlay from "@/components/EnglishOverlay";
export const metadata:Metadata={title:"Tamanho Eficaz | Indústria Metalomecânica",description:"Manutenção industrial e soluções metalomecânicas em Portugal e na Europa.",icons:{icon:{url:"/favicon.svg",type:"image/svg+xml"},apple:"/images/logo-tamanho-eficaz.png"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt"><body><EnglishOverlay/><ReferenceFrame>{children}</ReferenceFrame><CookieBanner/></body></html>}
