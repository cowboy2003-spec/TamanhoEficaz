import Link from "next/link";

export function ReferenceHero({className="", kicker, title, children, image}: {
  className?: string; kicker?: string; title: React.ReactNode;
  children?: React.ReactNode; image?: string;
}) {
  return <section className={`refHero ${className}`}>
    {image && <img className="refHeroImage" src={image} alt=""/>}
    <div className="refHeroShade"/>
    <div className="refWrap refHeroContent">
      {kicker && <div className="refKicker">{kicker}</div>}
      <h1>{title}</h1>{children}
    </div>
  </section>;
}

export function ReferenceLink({href, children, solid=false}: {
  href:string; children: React.ReactNode; solid?:boolean;
}) {
  return <Link className={`refButton${solid?" solid":""}`} href={href}>{children}</Link>;
}
