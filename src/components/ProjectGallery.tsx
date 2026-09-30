"use client";

import { useEffect, useRef, useState } from "react";

export default function ProjectGallery({
  images,
  title,
}: {
  images: readonly string[];
  title: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const previous = () => setActive((value) => value === null ? null : (value - 1 + images.length) % images.length);
  const next = () => setActive((value) => value === null ? null : (value + 1) % images.length);
  const close = () => setActive(null);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = oldOverflow;
    };
  }, [active, images.length]);

  const pointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse") return;
    startX.current = event.clientX;
    deltaX.current = 0;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const pointerMove = (event: React.PointerEvent) => {
    if (startX.current === null) return;
    deltaX.current = event.clientX - startX.current;
  };

  const pointerUp = () => {
    if (startX.current === null) return;
    const dx = deltaX.current;
    startX.current = null;
    deltaX.current = 0;
    if (Math.abs(dx) < 45 || images.length < 2) return;
    if (dx < 0) next();
    else previous();
  };

  return (
    <>
      <div className="gallery">
        {images.map((src, index) => (
          <button
            type="button"
            className="galleryBtn"
            key={`${src}-${index}`}
            onClick={() => setActive(index)}
            aria-label={`Abrir ${title}, imagem ${index + 1}`}
          >
            <img src={src} alt={`${title} — imagem ${index + 1}`} />
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="projectLightbox projectLightboxOpen" role="dialog" aria-modal="true" aria-label={`Galeria ${title}`}>
          <button type="button" className="lbBackdrop" onClick={close} aria-label="Fechar galeria" />
          <button type="button" className="lbClose" onClick={close} aria-label="Fechar">×</button>
          {images.length > 1 && <button type="button" className="lbPrev" onClick={previous} aria-label="Imagem anterior">‹</button>}
          <figure
            className="lbFigure"
            onPointerDown={pointerDown}
            onPointerMove={pointerMove}
            onPointerUp={pointerUp}
            onPointerCancel={pointerUp}
          >
            <img src={images[active]} alt={`${title} — imagem ${active + 1}`} draggable={false} />
            <figcaption>{active + 1} / {images.length}</figcaption>
          </figure>
          {images.length > 1 && <button type="button" className="lbNext" onClick={next} aria-label="Imagem seguinte">›</button>}
        </div>
      )}
    </>
  );
}
