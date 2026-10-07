import {Target, Eye, Heart} from "lucide-react";
import {ReferenceHero, ReferenceLink} from "@/components/Reference";
import {referenceImages} from "@/data/reference";

const facts = [["2019", "Ano de criação"], ["51 432 326", "Volume de negócios"], ["75 000+", "Horas de trabalho"], ["Coimbra", "Sede"]];
const values = [
  [Target, "Missão", "Fomentar parcerias de longo prazo assentes na competência e confiança, reforçando a posição da empresa nos mercados nacional e internacional."],
  [Eye, "Visão", "Atualizar continuamente conhecimento e capacidade técnica, promovendo um crescimento sustentável e preparado para novos desafios de mercado."],
  [Heart, "Valores", "Motivação, eficiência, melhoria contínua, proximidade com o cliente e foco na qualidade e segurança da execução."],
] as const;

export default function Empresa() {
  return <main className="refPage refCompany">
    {/* Option A: only this hero and the team block below. */}
    <ReferenceHero className="refCompanyHero" image={referenceImages.companyHero} title={<>Indústria portuguesa<br/>com dimensão<br/>europeia.</>}>
      <p>A Tamanho Eficaz, Lda. é uma empresa portuguesa com experiência em soluções metalomecânicas, manutenção industrial e projetos em Portugal e na Europa.</p>
      <ReferenceLink href="#perfil">Saber mais</ReferenceLink>
    </ReferenceHero>
    {/* Option B: photo profile, horizontal facts and three values. */}
    <section className="refProfileSection" id="perfil">
      <div className="refWrap">
        <div className="refProfile">
          <div className="refProfileText">
            <h2>Tamanho Eficaz, Lda.</h2>
            <p className="refProfileLead">Com sede em Souselas, Coimbra, a Tamanho Eficaz, Lda. está ativa desde 9 de abril de 2019.</p>
            <p>A presença pública inclui soldadura, serralharia, serralharia mecânica, eletricidade industrial, tubagem e operação de gruas, com atuação divulgada em Portugal, Espanha, França e Bélgica.</p>
          </div>
          <img className="refProfilePhoto" src={referenceImages.companyProfile} alt="Profissional Tamanho Eficaz em trabalho industrial"/>
        </div>
        <dl className="refFacts">{facts.map(([value,label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      </div>
    </section>
    <section className="refTeam" aria-labelledby="team-title">
      <img src={referenceImages.companyTeam} alt="Estrutura metálica em execução"/>
      <div className="refTeamContent">
        <div className="refKicker">A nossa equipa</div>
        <h2 id="team-title">Equipa.<br/>Competência no terreno.</h2>
        <p>A liderança destaca a qualificação das equipas, formação especializada, análise de risco, preparação em soldadura, leitura e desenho técnico e organização da fabricação como fatores relevantes para a execução dos projetos.</p>
      </div>
    </section>
    <section className="refValuesSection" aria-label="Missão, visão e valores">
      <div className="refWrap refValues">{values.map(([Icon,title,text]) => <article key={title}>
        <Icon size={30} strokeWidth={1.5} aria-hidden="true"/><h2>{title}</h2><p>{text}</p>
      </article>)}</div>
    </section>
  </main>;
}
