import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {ReferenceHero} from "@/components/Reference";
import {referenceImages, referenceServices} from "@/data/reference";

export default function Servicos() {
  return <main className="refPage refServices">
    <ReferenceHero className="refServicesHero" kicker="A nossa experiência" title={<>Serviços que<br/>mantêm a sua operação<br/>a funcionar.</>} image={referenceImages.servicesHero}>
      <p className="refUppercase">Da metalomecânica à manutenção industrial,<br/>com soluções adaptadas a cada desafio.</p>
    </ReferenceHero>
    <section className="refServiceSection" aria-label="Serviços">
      <div className="refWrap refServiceGrid">{referenceServices.map(service => <Link href={`/servicos/${service.slug}`} className="refServiceCard" key={service.slug}>
        <img src={service.image} alt={service.title}/>
        <div><h2>{service.title}</h2><p>{service.description}</p><span className="refMore">Saber mais <ArrowRight size={16} aria-hidden="true"/></span></div>
      </Link>)}</div>
    </section>
  </main>;
}
