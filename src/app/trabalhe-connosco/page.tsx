import {ReferenceHero, ReferenceLink} from "@/components/Reference";
import {referenceImages} from "@/data/reference";

export default function Carreiras() {
  return <main className="refPage refCareers">
    <ReferenceHero className="refCareersHero" title="Trabalhe connosco." image={referenceImages.careers}>
      <p className="refUppercase">Pessoas. Competência. Execução.</p>
      <p>Valorizamos profissionais competentes, com espírito de equipa e vontade de crescer em projetos desafiantes.</p>
      <ReferenceLink href="#oportunidades" solid>Ver oportunidades</ReferenceLink>
    </ReferenceHero>
<section className="refCareerForm" id="oportunidades"><div className="wrap split"><div><div className="eyebrow">RECRUTAMENTO</div><h2 className="title">Perfis técnicos</h2><p className="lead">A presença pública da empresa inclui recrutamento de soldadores, serralheiros tubistas, operadores de calandra e outros perfis metalomecânicos. Na versão final, as vagas devem ser alimentadas apenas por anúncios confirmados e atuais.</p><div className="awardgrid"><img src="/images/facebook/484037658_1172273764422990_928065014236281050_n.jpg" alt="Recrutamento"/><img src="/images/facebook/482210994_1169120388071661_8100650195375324244_n.jpg" alt="Recrutamento"/></div></div><form className="form"><input placeholder="Nome"/><input placeholder="E-mail"/><input placeholder="Telefone"/><select><option>Área profissional</option><option>Soldadura</option><option>Serralharia</option><option>Eletricidade</option><option>Tubagem</option><option>Operação de grua</option></select><textarea placeholder="Experiência e disponibilidade"/><input className="full" type="file"/><p className="formPrivacy">Ao enviar a candidatura, os dados e documentos serão tratados pela Tamanho Eficaz para fins de recrutamento, nos termos da Política de Privacidade.</p><button className="button full" type="button">Enviar candidatura</button></form></div></section>
</main>;
}
