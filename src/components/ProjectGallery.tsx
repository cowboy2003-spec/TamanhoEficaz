function safeId(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ProjectGallery({
  images,
  title,
}: {
  images: readonly string[];
  title: string;
}) {
  const base = safeId(title);

  return (
    <>
      <div className="gallery">
        {images.map((src, index) => (
          <a
            className="galleryBtn"
            key={`${src}-${index}`}
            href={`#${base}-slide-${index + 1}`}
            aria-label={`Abrir ${title}, imagem ${index + 1}`}
          >
            <img src={src} alt={`${title} — imagem ${index + 1}`} />
          </a>
        ))}
      </div>

      <div className="lightboxSlides" aria-label={`Galeria ${title}`}>
        {images.map((src, index) => {
          const current = `${base}-slide-${index + 1}`;
          const previous = `${base}-slide-${((index - 1 + images.length) % images.length) + 1}`;
          const next = `${base}-slide-${((index + 1) % images.length) + 1}`;

          return (
            <div className="projectLightbox" id={current} key={current}>
              <a className="lbBackdrop" href="#" aria-label="Fechar galeria" />
              <a className="lbClose" href="#" aria-label="Fechar">×</a>

              {images.length > 1 && (
                <a className="lbPrev" href={`#${previous}`} aria-label="Imagem anterior">‹</a>
              )}

              <figure className="lbFigure">
                <img src={src} alt={`${title} — imagem ${index + 1}`} />
                <figcaption>{index + 1} / {images.length}</figcaption>
              </figure>

              {images.length > 1 && (
                <a className="lbNext" href={`#${next}`} aria-label="Imagem seguinte">›</a>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
