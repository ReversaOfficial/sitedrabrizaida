import { Container } from './Container';
import { Button } from './Button';

const content: Record<string,{kicker:string;title:string;intro:string;sections:string[]}> = {
  '/sobre': {kicker:'SOBRE',title:'Medicina que olha para a pessoa inteira.',intro:'Uma presença médica construída a partir de escuta, conhecimento e acompanhamento individualizado.',sections:['Trajetória e visão de cuidado','A relação médico-paciente como parte do tratamento','Conhecimento científico aplicado à prática']},
  '/especialidades': {kicker:'ESPECIALIDADES',title:'Cuidado pensado para cada fase da sua vida.',intro:'Áreas de atuação apresentadas como primeira versão visual e marcadas para validação profissional.',sections:['Clínica Médica','Medicina de Família e Comunidade','Emagrecimento','Saúde da Mulher','Medicina Integrativa','Outros tratamentos']},
  '/tratamentos': {kicker:'TRATAMENTOS',title:'Acompanhamento individualizado.',intro:'Os tratamentos e serviços específicos serão detalhados após confirmação das informações oficiais.',sections:['Avaliação individual','Plano de cuidado','Acompanhamento contínuo']},
  '/conteudos': {kicker:'CONTEÚDOS',title:'Informação também é cuidado.',intro:'Uma estrutura editorial pronta para receber artigos e conteúdos oficiais.',sections:['Saúde','Emagrecimento','Saúde da Mulher','Medicina','Bem-estar','Qualidade de vida']},
  '/pesquisa': {kicker:'PESQUISA',title:'Conhecimento além do consultório.',intro:'Área preparada para produção científica e referências bibliográficas validadas.',sections:['Acidente de trabalho em profissionais da saúde: scoping review','Transtornos alimentares associados ao contexto ocupacional','Exposição ocupacional a agrotóxicos na agricultura']},
  '/contato': {kicker:'CONTATO',title:'Vamos conversar?',intro:'Se você deseja conhecer melhor o trabalho da Dra. Brizaida ou agendar uma consulta, entre em contato.',sections:['Instagram · @dra.brizaida','WhatsApp · [VALIDAR COM DRA. BRIZAIDA]','E-mail · [VALIDAR COM DRA. BRIZAIDA]']},
};

export function InternalPage({path,onHome}:{path:string;onHome:()=>void}) {
  if (path === '/cursos') return <CoursePage />;
  const page=content[path] || {kicker:'PÁGINA',title:'Dra. Brizaida',intro:'Esta área está preparada para a próxima etapa do projeto.',sections:['Conteúdo em construção']};
  return <main className="internal-page"><section className="internal-hero"><Container><span className="section-kicker">{page.kicker}</span><h1>{page.title}</h1><p>{page.intro}</p></Container></section><section className="section internal-content"><Container><div className="internal-list">{page.sections.map((s,i)=><article key={s}><span>{String(i+1).padStart(2,'0')}</span><div><h2>{s}</h2><p>[ CONTEÚDO A VALIDAR COM DRA. BRIZAIDA ]</p></div></article>)}</div><Button variant="text" onClick={onHome}>← Voltar para a Home</Button></Container></section></main>;
}

function CoursePage(){return <main className="internal-page course-page"><section className="internal-hero"><Container><span className="section-kicker">EDUCAÇÃO</span><h1>Novos aprendizados estão a caminho.</h1><p>Em breve, conteúdos, cursos e experiências de aprendizado estarão disponíveis neste espaço.</p><span className="coming-soon">EM BREVE</span></Container></section><section className="section"><Container className="course-preview"><div><span className="section-kicker">PRÓXIMA ETAPA</span><h2>Um ecossistema de conhecimento para acompanhar a medicina além do consultório.</h2></div><div><p>Esta primeira versão prepara a arquitetura visual para futuras páginas de cursos, autenticação, checkout e área do aluno.</p><small>Login · Cadastro · Checkout · Minha conta · Meus cursos · Certificados — futuros.</small></div></Container></section></main>}
