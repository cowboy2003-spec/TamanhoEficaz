import {Phone, CalendarDays, MapPin} from "lucide-react";
import {ReferenceLink} from "@/components/Reference";
import LocationMap from "@/components/LocationMap";

export default function Contactos() {
  return <main className="refPage refContacts">
    <section className="refContactSplit" aria-labelledby="contact-title">
      <div className="refContactInfo">
        <h1 id="contact-title">Contactos.</h1>
        <p>Fale connosco sobre o seu projeto, as suas necessidades de manutenção ou oportunidades de colaboração.</p>
        <dl className="refContactDetails">
          <div><Phone aria-hidden="true"/><dt>Telefone</dt><dd><a href="tel:+351912647472">(+351) 912 647 472</a></dd></div>
          <div><CalendarDays aria-hidden="true"/><dt>E-mail</dt><dd><a href="mailto:geral@tamanhoeficaz.pt">geral@tamanhoeficaz.pt</a></dd></div>
          <div><MapPin aria-hidden="true"/><dt>Localização</dt><dd><a href="https://www.google.com/maps/search/?api=1&query=R.%20Mercado%2026%2C%203020-863%20Souselas%2C%20Portugal" target="_blank" rel="noreferrer">R. Mercado 26 R/C<br/>3020-863 Souselas, Coimbra, Portugal</a></dd></div>
        </dl>
        <ReferenceLink href="#mensagem">Enviar mensagem</ReferenceLink>
      </div>
      <LocationMap/>
    </section>
    <section className="refContactForm" id="mensagem"><div className="refWrap split">
      <div><h2>Tamanho Eficaz, Lda.</h2><p>Segunda a Sexta: 08:00–17:00</p></div>
      <form className="form" aria-label="Formulário de contacto">
        <input placeholder="Nome" aria-label="Nome"/>
        <input placeholder="E-mail" aria-label="E-mail" type="email"/>
        <input placeholder="Telefone" aria-label="Telefone" type="tel"/>
        <input placeholder="Assunto" aria-label="Assunto"/>
        <textarea placeholder="Como podemos ajudar?" aria-label="Como podemos ajudar?"/>
        <p className="formPrivacy">Ao enviar este formulário, os dados serão tratados pela Tamanho Eficaz para responder ao seu pedido, nos termos da Política de Privacidade.</p>
        <button className="button full" type="button">Enviar mensagem</button>
      </form>
    </div></section>
  </main>;
}
