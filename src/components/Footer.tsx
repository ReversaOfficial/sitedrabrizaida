import { Container } from './Container';

export function Footer({ onHome }: { onHome: () => void }) {
  const links = [['Sobre','/sobre'],['Especialidades','/especialidades'],['Tratamentos','/tratamentos'],['Conteúdos','/conteudos'],['Pesquisa','/pesquisa'],['Cursos','/cursos'],['Contato','#contato']];
  const go = (href:string) => {
    if (href === '/') return onHome();
    if (href.startsWith('#')) { if (window.location.pathname !== '/') { onHome(); setTimeout(()=>window.location.hash=href.slice(1),0); } else window.location.hash=href.slice(1); return; }
    window.history.pushState({}, '', href); window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return <footer className="site-footer"><Container><div className="footer-main"><div><button className="footer-brand" onClick={onHome}>Dra. Brizaida</button><p>Medicina, saúde e cuidado com um olhar individualizado.</p></div><nav aria-label="Rodapé">{links.map(([label,href])=><button key={label} onClick={()=>go(href)}>{label}</button>)}</nav><div className="footer-contact"><a href="https://www.instagram.com/dra.brizaida/" target="_blank" rel="noreferrer">Instagram ↗</a><span>WhatsApp · [VALIDAR]</span></div></div><div className="footer-bottom"><span>CRM-RS 43750 · RQE 44809</span><span>© {new Date().getFullYear()} Dra. Brizaida Silot Ramirez Staudt</span></div></Container></footer>;
}