import {ReferenceHero} from "@/components/Reference";
import ReferenceProjects from "@/components/ReferenceProjects";

export default function Projetos() {
  return <main className="refPage refProjects">
    <ReferenceHero className="refProjectsHero" title={<>Projetos que falam<br/>pela escala.</>} image="/images/projects/baltic/Jacket-Baltic-Eagle-01-1-1024x766.jpg">
      <p className="refUppercase">Execução real em Portugal e na Europa.</p>
    </ReferenceHero>
    <ReferenceProjects/>
  </main>;
}
