import Link from "next/link";
import {news} from "@/data/content";

const cards = [
  {slug:news[0].slug, title:"Tamanho Eficaz distinguida com Prémio Gazela 2024", image:"/images/news/Tamanho-Eficaz-Premio-Gazela-2024-1200x900.jpg", date:news[0].date, lead:news[0].lead},
  {slug:news[1].slug, title:"Prémio Gazela 2023 e 2024 (Região Centro)", image:"/images/news/TAMANHO-EFICAZ-PREMIO-GAZELA2023.png", date:news[1].date, lead:news[1].lead},
];

export default function Noticias() {
  return <main className="refPage refNews">
    <section className="refNewsIntro"><div className="refWrap">
      <h1>Notícias e<br/>reconhecimento.</h1>
      <p className="refUppercase">A nossa evolução, os nossos projetos e o nosso percurso.</p>
    </div></section>
    <section id="arquivo" className="refNewsSection" aria-label="Notícias"><div className="refWrap refNewsGrid">
      {cards.map(card => <article className="refNewsCard" key={card.slug}>
        <Link href={`/noticias/${card.slug}`} className="refNewsImage"><img src={card.image} alt={card.title}/></Link>
        <div className="refNewsCopy"><h2><Link href={`/noticias/${card.slug}`}>{card.title}</Link></h2><time dateTime={card.slug.endsWith('2024')?'2025-07-07':'2024-07-11'}>{card.date}</time><p>{card.lead}</p></div>
      </article>)}
    </div><div className="refWrap refAllNews"><a href="#arquivo" className="refMore">Ver todas as notícias </a></div></section>
  </main>;
}
