import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Container } from './Container';

const items = [['Início','/'],['Especialidades','/especialidades'],['Tratamentos','/tratamentos'],['Conteúdos','/conteudos'],['Cursos','/cursos'],['Contato','/contato']] as const;

export function Header({onBooking}:{onBooking:()=>void}) {
  const [solid,setSolid]=useState(false),[open,setOpen]=useState(false);
  useEffect(()=>{const f=()=>setSolid(window.scrollY>30);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
  useEffect(()=>{document.body.classList.toggle('menu-open',open);return()=>document.body.classList.remove('menu-open')},[open]);
  const nav=(href:string)=>{setOpen(false);window.history.pushState({},'',href);window.dispatchEvent(new PopStateEvent('popstate'));};
  return <header className={`site-header ${solid||open?'site-header--solid':''}`}>
    <div className="topbar"><Container><span>CRM-RS 43750 · RQE 44809</span><span>Medicina de Família e Comunidade</span><a href="https://www.instagram.com/dra.brizaida/" target="_blank" rel="noreferrer">@dra.brizaida ↗</a></Container></div>
    <Container className="header-inner">
      <button className="wordmark" onClick={()=>nav('/')} aria-label="Dra. Brizaida"><span className="wordmark-main">Dra. Brizaida</span><span className="wordmark-caption">MEDICINA · SAÚDE · CUIDADO</span></button>
      <nav className="desktop-nav">{items.map(([label,href])=><button key={label} onClick={()=>nav(href)}>{label}</button>)}</nav>
      <div className="header-actions"><Button className="header-booking" onClick={onBooking}>Agendar consulta</Button><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Menu"><span/><span/><span/></button></div>
    </Container>
    <nav className={`mobile-nav ${open?'mobile-nav--open':''}`}>{items.map(([label,href])=><button key={label} onClick={()=>nav(href)}>{label}</button>)}<Button onClick={()=>{setOpen(false);onBooking()}}>Agendar consulta</Button></nav>
  </header>;
}