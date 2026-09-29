import { Button } from './Button';
import { Container } from './Container';

const areas = [
  ['01', 'Clínica Médica', 'Acompanhamento clínico individualizado e cuidado integral da saúde.'],
  ['02', 'Medicina de Família e Comunidade', 'Uma abordagem próxima, contínua e centrada na pessoa.'],
  ['03', 'Emagrecimento', 'Acompanhamento médico individualizado para processos de emagrecimento.'],
  ['04', 'Saúde da Mulher', 'Cuidados e acompanhamento voltados à saúde feminina.'],
  ['05', 'Medicina Integrativa', 'Uma abordagem que considera a pessoa de forma ampla.'],
  ['06', 'Outros tratamentos', 'Avaliações e tratamentos conforme necessidade individual.'],
];

const posts = [
  ['SAÚDE', 'Conteúdo demonstrativo', 'Como olhar para a saúde de forma integral', 'Texto demonstrativo para substituir posteriormente por artigo aprovado.'],
  ['EMAGRECIMENTO', 'Conteúdo demonstrativo', 'Emagrecimento e cuidado individualizado', 'Conteúdo demonstrativo, sem promessa de resultado e sujeito à validação editorial.'],
  ['SAÚDE DA MULHER', 'Conteúdo demonstrativo', 'Cuidado e acompanhamento ao longo da vida', 'Estrutura pronta para receber conteúdo oficial da Dra. Brizaida.'],
  ['QUALIDADE DE VIDA', 'Conteúdo demonstrativo', 'Pequenas escolhas, cuidado contínuo', 'Conteúdo demonstrativo para apresentação visual do projeto.'],
];

const research = [
  ['PUBLICAÇÃO A VALIDAR', 'Acidente de trabalho em profissionais da saúde: scoping review'],
  ['PUBLICAÇÃO A VALIDAR', 'Transtornos alimentares associados ao contexto ocupacional'],
  ['PUBLICAÇÃO A VALIDAR', 'Exposição ocupacional a agrotóxicos na agricultura'],
];

function Placeholder({ label, tall = false }: { label: string; tall?: boolean }) {
  return <div className={`media-placeholder ${tall ? 'media-placeholder--tall' : ''}`}><span>✳</span><strong>{label}</strong><small>Imagem oficial a inserir</small></div>;
}

export function HomeSections() {
  return (
    <>
      <section className="authority-strip">
        <Container className="authority-grid">
          <div><span className="section-kicker">ATUAÇÃO</span><h2>Conhecimento que se transforma em cuidado.</h2></div>
          <div className="authority-item"><b>CRM-RS 43750</b><span>Registro profissional</span></div>
          <div className="authority-item"><b>RQE 44809</b><span>Medicina de Família e Comunidade</span></div>
          <div className="authority-item"><b>Produção científica</b><span>Conhecimento além do consultório</span></div>
        </Container>
      </section>

      <section id="sobre" className="section about-section">
        <Container className="split-grid">
          <div className="section-media"><Placeholder label="FOTO DA DRA. BRIZAIDA — SOBRE" tall /></div>
          <div className="section-copy">
            <span className="section-kicker">SOBRE A DRA. BRIZAIDA</span>
            <h2>Medicina que olha para a pessoa inteira.</h2>
            <p>Mais do que tratar sintomas, o cuidado médico começa pela compreensão da pessoa, da sua rotina, da sua história e das suas necessidades.</p>
            <p>Com uma abordagem baseada em conhecimento médico, escuta e acompanhamento individualizado, a Dra. Brizaida busca construir uma relação de confiança em cada atendimento.</p>
            <a className="editorial-link" href="/sobre">Conheça a Dra. Brizaida <span>↗</span></a>
          </div>
        </Container>
      </section>

      <section id="especialidades" className="section areas-section">
        <Container>
          <div className="section-heading centered">
            <span className="section-kicker">ÁREAS DE ATUAÇÃO · [VALIDAR]</span>
            <h2>Cuidado pensado para cada fase da sua vida.</h2>
            <p>Uma primeira organização visual das áreas a confirmar com a Dra. Brizaida.</p>
          </div>
          <div className="areas-grid">
            {areas.map(([number, title, text]) => <article className="area-item" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="dark-section">
        <Container className="difference-grid">
          <div><span className="section-kicker light">DIFERENCIAIS</span><h2>Mais do que uma consulta. Um acompanhamento.</h2></div>
          <div className="pillar-grid">
            {[
              ['01', 'Escuta', 'Entender antes de tratar.'],
              ['02', 'Individualidade', 'Cada pessoa possui uma história diferente.'],
              ['03', 'Ciência', 'Conhecimento médico aplicado ao cuidado.'],
              ['04', 'Acompanhamento', 'Uma relação contínua com o paciente.'],
            ].map(([n,t,d]) => <div className="pillar" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </Container>
      </section>

      <section className="section journey-section">
        <Container>
          <div className="section-heading"><span className="section-kicker">JORNADA</span><h2>Seu cuidado começa aqui.</h2></div>
          <div className="journey-grid">
            {[
              ['01','Agende','Escolha o melhor momento para sua consulta.'],
              ['02','Converse','Conte sua história, suas necessidades e seus objetivos.'],
              ['03','Avalie','Receba uma avaliação individualizada.'],
              ['04','Acompanhe','Construa um plano de cuidado junto à sua médica.'],
            ].map(([n,t,d]) => <div className="journey-item" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </Container>
      </section>

      <section id="tratamentos" className="section weight-section">
        <Container className="weight-grid">
          <div className="section-copy"><span className="section-kicker">EMAGRECIMENTO</span><h2>Seu processo de cuidado merece ser individual.</h2><p>O emagrecimento pode envolver diferentes aspectos da saúde, rotina e estilo de vida. O acompanhamento médico permite olhar para esse processo de forma individualizada e responsável.</p><Button variant="text" onClick={() => { window.history.pushState({}, '', '/tratamentos'); window.dispatchEvent(new PopStateEvent('popstate')); }}>Conheça o acompanhamento →</Button></div>
          <Placeholder label="IMAGEM EDITORIAL — CUIDADO E BEM-ESTAR" />
        </Container>
      </section>

      <section id="pesquisa" className="section research-section">
        <Container>
          <div className="section-heading"><span className="section-kicker">PESQUISA & CONHECIMENTO</span><h2>Conhecimento além do consultório.</h2><p>Seleção visual preparada para receber e validar as publicações científicas da Dra. Brizaida.</p></div>
          <div className="research-grid">{research.map(([tag,title]) => <article className="research-card" key={title}><span>{tag}</span><h3>{title}</h3><p>Referência demonstrativa. Dados bibliográficos e link devem ser validados antes da publicação.</p><a href="/pesquisa">Ver publicação ↗</a></article>)}</div>
        </Container>
      </section>

      <section id="conteudos" className="section blog-section">
        <Container>
          <div className="section-heading split-heading"><div><span className="section-kicker">CONTEÚDOS · DEMONSTRATIVO</span><h2>Informação também é cuidado.</h2></div><a className="editorial-link" href="/conteudos">Ver todos os conteúdos ↗</a></div>
          <div className="blog-grid">{posts.map(([cat,date,title,text], i) => <article className={`blog-card ${i === 0 ? 'blog-card--featured' : ''}`} key={title}><div className="blog-image"><Placeholder label={cat} /></div><div className="blog-meta"><span>{cat}</span><span>{date}</span></div><h3>{title}</h3><p>{text}</p><a href="/conteudos">Leia mais ↗</a></article>)}</div>
        </Container>
      </section>

      <section className="section testimonials-section">
        <Container>
          <div className="section-heading centered"><span className="section-kicker">PROVA SOCIAL</span><h2>O cuidado também se percebe nos detalhes.</h2><p>Componente preparado para depoimentos reais e autorizados.</p></div>
          <div className="testimonial-placeholder"><span>“</span><p>[ DEPOIMENTO REAL A INSERIR ]</p><small>Nome · cidade · avaliação — conteúdo pendente de autorização</small></div>
        </Container>
      </section>

      <section id="cursos" className="course-banner">
        <Container className="course-grid"><div><span className="section-kicker light">EDUCAÇÃO</span><h2>Aprenda com quem vive a medicina na prática.</h2></div><div><p>Em breve, novos conteúdos, cursos e experiências de aprendizado estarão disponíveis.</p><a className="light-link" href="/cursos">Conheça os cursos ↗</a></div></Container>
      </section>

      <section className="section locations-section">
        <Container>
          <div className="section-heading"><span className="section-kicker">ATENDIMENTO</span><h2>Onde cuidar de você.</h2><p>Locais e horários serão publicados após confirmação das informações oficiais.</p></div>
          <div className="location-grid"><article><span>01</span><h3>[ LOCAL DE ATENDIMENTO ]</h3><p>[ ENDEREÇO ]</p><p>[ HORÁRIO ]</p><a href="#contato">Agendar consulta ↗</a></article><article><span>02</span><h3>[ LOCAL DE ATENDIMENTO ]</h3><p>[ ENDEREÇO ]</p><p>[ HORÁRIO ]</p><a href="#contato">Agendar consulta ↗</a></article></div>
        </Container>
      </section>

      <section id="contato" className="section contact-section">
        <Container className="contact-grid">
          <div className="section-copy"><span className="section-kicker">CONTATO</span><h2>Vamos conversar?</h2><p>Se você deseja conhecer melhor o trabalho da Dra. Brizaida ou agendar uma consulta, entre em contato.</p><div className="contact-links"><a href="https://www.instagram.com/dra.brizaida/" target="_blank" rel="noreferrer">Instagram · @dra.brizaida ↗</a><a href="mailto:[VALIDAR COM DRA. BRIZAIDA]">E-mail · [VALIDAR]</a><span>WhatsApp · [VALIDAR]</span></div></div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}><label>Nome<input name="name" placeholder="Seu nome" /></label><label>E-mail<input type="email" name="email" placeholder="seu@email.com" /></label><label>Telefone<input name="phone" placeholder="(00) 00000-0000" /></label><label>Mensagem<textarea name="message" rows={5} placeholder="Como podemos ajudar?" /></label><Button type="submit">Enviar mensagem ↗</Button></form>
        </Container>
      </section>

      <section className="final-cta"><Container><span className="section-kicker light">UM PRIMEIRO PASSO</span><h2>Cuidar de você começa com uma conversa.</h2><a className="cta-light" href="#contato">Agendar consulta ↗</a></Container></section>
    </>
  );
}