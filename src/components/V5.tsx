import Link from "next/link";
export function V5Hero({n,kicker,title,text,img,cta,tall}:{n?:string,kicker?:string,title:string,text?:string,img?:string,cta?:{href:string,label:string},tall?:boolean}){
 return <section className={"v5hero"+(tall?" tall":"")} style={img?{backgroundImage:`linear-gradient(90deg,rgba(3,17,30,.94) 8%,rgba(3,17,30,.55) 55%,rgba(3,17,30,.15)),url('${img}')`}:undefined}>
  <div className="wrap">{kicker&&<div className="v5kicker">{kicker}</div>}<h1>{title}</h1>{text&&<p>{text}</p>}{cta&&<Link className="v5btn ghost" href={cta.href}>{cta.label}</Link>}</div></section>
}
