import Link from "next/link";
import {ArrowRight} from "lucide-react";
import EuropeMap from "@/components/EuropeMap";
import {referenceImages} from "@/data/reference";

export default function Internacional() {
  return <main className="refPage refInternational">
    <section className="refInternationalHero">
      <EuropeMap/>
      <div className="refInternationalShade"/>
      <div className="refWrap refInternationalContent">
        
        <h1>Portugal e Europa.</h1>
        <p>Levamos a experiência e a capacidade de execução da Tamanho Eficaz a diferentes mercados europeus, respondendo a projetos de elevada exigência técnica.</p>
        <div className="refCountries">{["Portugal", "Espanha", "França", "Bélgica"].map(country => <Link key={country} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(country)}`} target="_blank" rel="noreferrer">{country}<ArrowRight size={18} aria-hidden="true"/></Link>)}</div>
      </div>
    </section>
    <section className="refInternationalSplit">
      <img src={referenceImages.internationalProject} alt="Projeto industrial internacional"/>
      <div className="refInternationalText">
        <h2>Parcerias,<br/>projetos e execução<br/>em contexto internacional.</h2>
        <p>A liderança identificou publicamente a Smulders Projects N.V. como um dos seus melhores clientes internacionais, relacionando essa colaboração com preparação em soldadura, desenho técnico e organização da fabricação.</p>
      </div>
    </section>
  </main>;
}
