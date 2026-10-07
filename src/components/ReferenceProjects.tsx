"use client";

import Link from "next/link";
import {X} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {projectData} from "@/data/site";

const filters = ["Todos", "Indústria", "Manutenção", "Estruturas", "Tubagens", "Elétrica"] as const;
type Category = typeof filters[number];
const projects = [
  {title:projectData["jacket-baltic-eagle"].title, subtitle:"Estruturas offshore", image:projectData["jacket-baltic-eagle"].imgs[0], href:"/projetos/jacket-baltic-eagle", categories:["Indústria", "Estruturas"], featured:true},
  {title:projectData["brug-henneaulann-zaventem"].title, subtitle:"Estruturas industriais", image:projectData["brug-henneaulann-zaventem"].imgs[0], href:"/projetos/brug-henneaulann-zaventem", categories:["Indústria", "Estruturas"], featured:true},
  {title:"Manutenção industrial", subtitle:"", image:"/images/facebook/89058750_143791597111007_6522850721736425472_n.jpg", href:null, categories:["Indústria", "Manutenção"], featured:false},
  {title:"Serralharia e estruturas", subtitle:"", image:"/images/facebook/78158078_103124127844421_6959067503196635136_n.jpg", href:null, categories:["Indústria", "Estruturas"], featured:false},
  {title:"Tubagens industriais", subtitle:"", image:"/images/facebook/78254293_103156054507895_4034552987778023424_n.jpg", href:null, categories:["Indústria", "Tubagens"], featured:false},
];

export default function ReferenceProjects() {
  const [active,setActive] = useState<Category>("Todos");
  const [expanded,setExpanded] = useState<typeof projects[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const filtered = active === "Todos" ? projects : projects.filter(project => project.categories.includes(active));
  useEffect(() => {
    if(expanded) dialog.current?.showModal();
    else dialog.current?.close();
    if(!expanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {document.body.style.overflow = previousOverflow;};
  },[expanded]);

  return <section className="refProjectSection" aria-label="Portefólio">
    <div className="refWrap">
      <div className="refFilters" role="group" aria-label="Filtrar projetos">
        {filters.map(filter => <button type="button" key={filter} aria-pressed={active===filter} className={active===filter?"active":""} onClick={()=>setActive(filter)}>{filter}</button>)}
      </div>
      <div className={`refProjectGrid${active!=="Todos"?" filtered":""}`} aria-live="polite">
        {filtered.map(project => {
          const content = <><img src={project.image} alt={project.title}/><div className="refProjectShade"/><div className="refProjectMeta"><div><h2>{project.title}</h2>{project.subtitle && <p>{project.subtitle}</p>}</div></div></>;
          const className = `refProjectCard${project.featured?" featured":""}`;
          return project.href ? <Link href={project.href} key={project.title} className={className}>{content}</Link> : <button type="button" className={className} key={project.title} aria-label={`Ver imagem: ${project.title}`} onClick={()=>setExpanded(project)}>{content}</button>;
        })}
      </div>
      {filtered.length===0 && <p className="refEmpty" role="status">Não existem projetos publicados nesta categoria.</p>}
    </div>
    <dialog ref={dialog} className="refProjectDialog" onCancel={()=>setExpanded(null)} onClose={()=>setExpanded(null)} onClick={event=>{if(event.target===event.currentTarget)setExpanded(null);}} aria-label={expanded?.title || "Imagem de projeto"}>
      <button type="button" aria-label="Fechar galeria" className="refDialogClose" onClick={()=>setExpanded(null)}><X/></button>
      {expanded && <figure><img src={expanded.image} alt={expanded.title}/><figcaption>{expanded.title}</figcaption></figure>}
    </dialog>
  </section>;
}
