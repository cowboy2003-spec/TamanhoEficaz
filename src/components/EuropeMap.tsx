import {referenceImages} from "@/data/reference";

// Equirectangular night imagery: lon -25..65, lat 70..20.
// Routes join the four published European markets; no additional markets.
export default function EuropeMap() {
  return <svg className="refEuropeMap" viewBox="0 0 900 500" role="img" aria-label="Portugal, Espanha, França e Bélgica no mapa da Europa">
    <defs>
      <filter id="ref-map-glow"><feGaussianBlur stdDeviation="3"/></filter>
    </defs>
    <image href={referenceImages.europe} x="-1550" y="-200" width="3600" height="1800"/>
    <g className="refMapRoutes" fill="none" stroke="#109be5" strokeWidth="1.5">
      <path d="M166 298 Q185 265 213 296"/>
      <path d="M166 298 Q182 167 274 211"/>
      <path d="M166 298 Q214 123 294 192"/>
    </g>
    {[{x:166,y:298},{x:213,y:296},{x:274,y:211},{x:294,y:192}].map((point,i) => <g key={i}>
      <circle cx={point.x} cy={point.y} r="9" fill="#05a6ff" opacity=".8" filter="url(#ref-map-glow)"/>
      <circle cx={point.x} cy={point.y} r="3" fill="#b5eaff"/>
    </g>)}
  </svg>;
}
