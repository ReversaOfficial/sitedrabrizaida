import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Container } from './Container';

const items = [
  ['Início', '/'],
  ['Sobre', '/sobre'],
  ['Especialidades', '/especialidades'],
  ['Tratamentos', '/tratamentos'],
  ['Conteúdos', '/conteudos'],
  ['Cursos', '/cursos'],
  ['Contato', '/contato'],
] as const;

export function Header({ onBooking }: { onBooking: () => void; onPending?: (label: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 24);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const escape = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', escape);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', escape);
    };
  }, [open]);

  const navigate = (href: string) => {
    setOpen(false);
    if (href === '/') {
      if (window.location.pathname !== '/') window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <header className={`site-header ${scrolled || open ? 'site-header--solid' : ''}`}>
      <Container className="header-inner">
        <button className="wordmark" onClick={() => navigate('/')} aria-label="Dra. Brizaida, início">
          <span className="wordmark-main">Dra. Brizaida</span>
          <span className="wordmark-caption">MEDICINA & CUIDADO</span>
        </button>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {items.map(([label, href]) => (
            <button key={label} onClick={() => navigate(href)}>{label}</button>
          ))}
        </nav>

        <div className="header-actions">
          <Button className="header-booking" onClick={onBooking}>Agendar consulta ↗</Button>
          <button type="button" className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </Container>

      <nav className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Navegação mobile">
        {items.map(([label, href]) => (
          <button key={label} onClick={() => navigate(href)}>{label}</button>
        ))}
        <Button onClick={() => { setOpen(false); onBooking(); }}>Agendar consulta ↗</Button>
      </nav>
    </header>
  );
}