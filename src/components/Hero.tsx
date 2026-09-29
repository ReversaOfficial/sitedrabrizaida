import { Button } from './Button';
import { Container } from './Container';
export function Hero({onBooking,onAbout}:{onBooking:()=>void;onAbout:()=>void}) {
 return <section id="inicio" className="hero-template">
  <div className="hero-slide"><div className="hero-overlay"/>
   <Container className="hero-slide-content"><span className="hero-eyebrow">MEDICINA · SAÚDE · CUIDADO</span><h1>Medical care<br/><em>you can trust.</em></h1><p>Uma medicina que começa pela escuta, entende cada pessoa e transforma conhecimento em cuidado.</p><div><Button onClick={onBooking}>Agendar consulta</Button><Button variant="text" onClick={onAbout}>Conheça a Dra. Brizaida →</Button></div></Container>
   <div className="hero-placeholder"><span>✳</span><strong>FOTO OFICIAL DA DRA. BRIZAIDA</strong><small>Imagem profissional a inserir</small></div>
   <div className="hero-arrows"><button aria-label="Anterior">‹</button><button aria-label="Próximo">›</button></div>
  </div>
 </section>;
}