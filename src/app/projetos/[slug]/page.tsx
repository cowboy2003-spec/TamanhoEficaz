import { notFound } from "next/navigation";
import { projectData } from "@/data/site";
import ProjectGallery from "@/components/ProjectGallery";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectData[slug as keyof typeof projectData];
  if (!project) notFound();

  return (
    <>
      <section
        className="projectHero"
        style={{
          background: `linear-gradient(90deg,rgba(4,25,43,.90),rgba(4,25,43,.25)),url("${project.imgs[0]}") center/cover`,
        }}
      >
        <div className="wrap">
          <h1 style={{ fontSize: 54, margin: "8px 0" }}>{project.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="title">Galeria do projeto</h2>
          <p className="lead">
            Selecione uma imagem para abrir a galeria. Pode navegar pelas setas ou pelo teclado.
          </p>
          <ProjectGallery images={project.imgs} title={project.title} />
        </div>
      </section>
    </>
  );
}
