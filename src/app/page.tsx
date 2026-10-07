import Link from "next/link";
import {projectData} from "@/data/site";

const capabilities=[
  ["01","Soldadura","MIG/MAG · TIG · estruturas metálicas","/images/facebook/475745436_1143203500663350_5840538267779849528_n.jpg"],
  ["02","Serralharia","Fabricação · montagem · manutenção","/images/facebook/78158078_103124127844421_6959067503196635136_n.jpg"],
  ["03","Tubagem industrial","Montagem · soldadura · inspeção","/images/facebook/78345394_103155771174590_3758875804600107008_n.jpg"],
  ["04","Eletricidade industrial","Instalação · manutenção · automação","/images/facebook/88321455_143791523777681_3764796777794895872_n.jpg"],
];

export default function Home(){
 const projects=Object.entries(projectData);
 return <main className="signatureHome">
  <section className="sigHero">
   <div className="sigHeroMedia"/>
   <div className="sigGrid"/>
   <div className="wrap sigHeroInner">
    <div className="sigOverline"><span>Metalomecânica</span><span>Portugal → Europa</span></div>
    <h1><span>INDÚSTRIA</span><span>SEM</span><span className="stroke">FRONTEIRAS.</span></h1>
    <div className="sigHeroBottom"><p>Manutenção industrial, fabricação e equipas técnicas para projetos exigentes.</p><Link href="/projetos" className="sigArrow">Explorar projetos <b>↘</b></Link></div>
   </div>
   <div className="sigIndex">TE / 2019 — 2026</div>
  </section>

  <section className="sigManifesto">
   <div className="wrap">
    <div className="sigSectionNo">COMPETÊNCIA</div>
    <div className="sigManifestoGrid"><h2>Não mostramos indústria.<br/><em>Mostramos execução.</em></h2><div><p>Trabalho real. Pessoas reais. Estruturas que saem do desenho e entram em operação.</p><p className="sigSmall">A Tamanho Eficaz publica atividade em Portugal, Espanha, França e Bélgica.</p></div></div>
   </div>
  </section>

  <section className="sigCapabilities">
   <div className="wrap"><div className="sigSectionNo light">CAPACIDADES</div><div className="sigCapIntro"><h2>WE BUILD.<br/>WE WELD.<br/><span>WE DELIVER.</span></h2><p>Competências industriais apresentadas sem ruído: imagem, especialidade e execução.</p></div></div>
   <div className="sigCapRail">{capabilities.map((c)=><Link href="/servicos" className="sigCap" key={c[0]} style={{backgroundImage:`linear-gradient(180deg,rgba(2,14,23,.05),rgba(2,14,23,.9)),url('${c[3]}')`}}><span>{c[0]}</span><div><small>{c[2]}</small><h3>{c[1]}</h3></div></Link>)}</div>
  </section>

  <section className="sigProjects">
   <div className="wrap"><div className="sigSectionNo">SELECTED WORK</div><div className="sigProjectHeading"><h2>Projetos que falam<br/>pela escala.</h2><span>Arraste / explore ↓</span></div></div>
   {projects.map(([slug,p],i)=><Link href={`/projetos/${slug}`} className="sigProject" key={slug}><img src={p.imgs[0]} alt={p.title}/><div className="sigProjectShade"/><div className="sigProjectMeta"><span>0{i+1}</span><div><h3>{p.title}</h3></div><b>↗</b></div></Link>)}
  </section>

  <section className="sigEurope">
   <div className="sigEuropePhoto"/>
   <div className="wrap sigEuropeInner"><div className="sigSectionNo light">EUROPA</div><h2>4 MERCADOS.<br/><span>UMA EXECUÇÃO.</span></h2><div className="sigCountryLine"><span>PT<br/><b>Portugal</b></span><i>→</i><span>ES<br/><b>Espanha</b></span><i>→</i><span>FR<br/><b>França</b></span><i>→</i><span>BE<br/><b>Bélgica</b></span></div><Link href="/internacional" className="sigTextLink">Presença internacional ↗</Link></div>
  </section>

  <section className="sigRecognition"><div className="wrap"><div className="sigSectionNo">RECONHECIMENTO</div><div className="sigRecognitionGrid"><div><div className="sigYears">23<span>+</span>24</div><h2>EMPRESA<br/>GAZELA</h2><p>Distinção comunicada pela empresa em dois anos consecutivos.</p><Link href="/noticias" className="sigTextLink darkLink">Ver notícias ↗</Link></div><div className="sigAwardImgs"><img src="/images/news/TAMANHO-EFICAZ-PREMIO-GAZELA2023.png" alt="Prémio Gazela 2023"/><img src="/images/news/Tamanho-Eficaz-Premio-Gazela-2024-1200x900.jpg" alt="Prémio Gazela 2024"/></div></div></div></section>

  <section className="sigPeople"><div className="wrap"><div className="sigSectionNo light">NO TERRENO</div><h2>PESSOAS.<br/>TÉCNICA.<br/><span>EXECUÇÃO.</span></h2><div className="sigPeopleStrip"><img src="/images/facebook/89058750_143791597111007_6522850721736425472_n.jpg" alt="Trabalho industrial"/><img src="/images/facebook/89054307_143791690444331_8406013694269456384_n.jpg" alt="Instalação industrial"/><img src="/images/facebook/78354868_103155731174594_2107160188627714048_n.jpg" alt="Soldadura industrial"/><img src="/images/facebook/78158078_103124127844421_6959067503196635136_n.jpg" alt="Estrutura metálica"/></div></div></section>

  <section className="sigFinal"><div className="wrap"><small>NOVOS DESAFIOS</small><h2>VAMOS CONSTRUIR<br/><span>O PRÓXIMO?</span></h2><Link href="/pedir-proposta">Pedir proposta <b>↗</b></Link></div></section>
 </main>
}
