import { Button } from './Button';
import { Container } from './Container';
import { courses } from '../data/site';

const welcome=[
 ['01','Cuidado individual','Cada atendimento começa pela escuta e pela compreensão da pessoa.'],
 ['02','Acompanhamento','Uma relação médica construída com proximidade e continuidade.'],
 ['03','Conhecimento','Medicina baseada em conhecimento e atualização científica.'],
 ['04','Agendamento','Um primeiro passo simples para começar seu cuidado.']
];
const gallery=['CLÍNICA MÉDICA','SAÚDE DA MULHER','EMAGRECIMENTO','MEDICINA DE FAMÍLIA','PREVENÇÃO','EDUCAÇÃO EM SAÚDE'];
const news=[['18 SET','Como olhar para a saúde de forma integral'],['12 SET','Emagrecimento e cuidado individualizado']];
const departments=['Medicina de Família','Clínica Médica','Saúde da Mulher','Emagrecimento','Prevenção','Educação em Saúde'];

function Media({label}:{label:string}){return <div className="template-media"><span>✳</span><strong>{label}</strong><small>Imagem oficial a inserir</small></div>}

export function HomeSections(){return <>
 <section className="welcome"><Container><div className="section-title centered"><span>BEM-VINDA À CLÍNICA</span><h2>Medicina que olha<br/>para <em>você.</em></h2></div><div className="welcome-grid">{welcome.map(([n,t,d])=><article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></Container></section>

 <section className="appointment"><Container className="appointment-grid"><div className="appointment-copy"><span>AGENDE SUA CONSULTA</span><h2>Agende sua<br/><em>consulta.</em></h2><p>Escolha um momento para conversar, avaliar suas necessidades e construir seu cuidado.</p></div><form onSubmit={e=>e.preventDefault()}><input placeholder="Seu nome"/><input type="email" placeholder="E-mail"/><input placeholder="Telefone"/><select defaultValue=""><option value="" disabled>Motivo da consulta</option><option>Consulta médica</option><option>Avaliação</option><option>Emagrecimento</option></select><Button type="submit">Solicitar agendamento</Button></form></Container></section>

 <section className="gallery"><Container><div className="section-title"><span>NOSSAS ÁREAS</span><h2>Áreas de <em>cuidado.</em></h2></div><div className="gallery-filters">{['TODAS',...gallery].map(x=><button key={x}>{x}</button>)}</div><div className="gallery-grid">{gallery.map((x,i)=><article key={x} className={i===0?'featured':''}><Media label={x}/><div><span>{x}</span><h3>{i===0?'Cuidado individualizado':'Conheça esta área de atuação'}</h3><a href="/especialidades">Ver mais ↗</a></div></article>)}</div></Container></section>

 <section className="testimonials"><Container><div className="section-title centered"><span>DEPOIMENTOS</span><h2>O cuidado fala<br/><em>por si.</em></h2></div><div className="testimonial-card"><div className="quote">“</div><p>[ DEPOIMENTO REAL A INSERIR ]</p><span>Nome · cidade · conteúdo pendente de autorização</span></div></Container></section>


 <section className="news courses-home"><Container><div className="section-title split"><div><span>CURSOS</span><h2>Conhecimento que<br/>continua <em>além da consulta.</em></h2></div><a href="/cursos">Ver todos os cursos ↗</a></div>{courses.length ? <div className="news-grid">{courses.map(course=><article key={course.slug}><div className="news-image"><Media label={course.imageLabel}/></div><div className="news-date">{course.status==="available"?"DISPONÍVEL":"EM BREVE"}</div><h3>{course.title}</h3><p>{course.excerpt}</p><a href={`/cursos/${course.slug}`}>Conhecer curso ↗</a></article>)}</div> : <div className="courses-empty"><span>EM BREVE</span><h3>Novos cursos serão publicados aqui.</h3><p>Quando um curso for disponibilizado, ele aparecerá automaticamente nesta seção e também na página de Cursos.</p><a href="/cursos">Conheça a página de Cursos ↗</a></div>}</Container></section>

 <section className="what-we-offer"><Container><div className="section-title centered"><span>O QUE OFERECEMOS</span><h2>Um cuidado pensado<br/><em>para você.</em></h2></div><div className="offer-list">{['Escuta e avaliação individual','Acompanhamento médico','Saúde e prevenção'].map((x,i)=><article key={x}><b>0{i+1}</b><div><h3>{x}</h3><p>Informação inicial sobre a experiência de cuidado. O conteúdo final será validado com a Dra. Brizaida.</p></div><a href="/tratamentos">Saiba mais ↗</a></article>)}</div></Container></section>

 <section className="departments"><Container><div className="section-title split"><div><span>ÁREAS DE ATUAÇÃO</span><h2>Áreas de<br/><em>atuação.</em></h2></div><p>Áreas organizadas para apresentar a atuação médica da Dra. Brizaida. Conteúdo sujeito à validação.</p></div><div className="departments-grid">{departments.map((x,i)=><a href="/especialidades" key={x}><span>0{i+1}</span><strong>{x}</strong><b>↗</b></a>)}</div></Container></section>

 <section id="contato" className="contact-template"><Container><div className="section-title centered"><span>ALGUMA DÚVIDA?</span><h2>Vamos <em>conversar?</em></h2></div><div className="contact-grid-template"><div><h3>Dra. Brizaida Silot Ramirez Staudt</h3><p>CRM-RS 43750 · RQE 44809</p><p>Medicina de Família e Comunidade</p><a href="https://www.instagram.com/dra.brizaida/" target="_blank" rel="noreferrer">Instagram · @dra.brizaida ↗</a></div><form onSubmit={e=>e.preventDefault()}><input placeholder="Nome completo"/><input placeholder="E-mail"/><input placeholder="Assunto"/><textarea placeholder="Sua mensagem" rows={5}/><Button type="submit">Enviar mensagem</Button></form></div></Container></section>

 <section className="final-template"><Container><span>UM PRIMEIRO PASSO</span><h2>Cuidar de você começa<br/>com uma <em>conversa.</em></h2><Button onClick={()=>{window.location.hash='contato'}}>Agendar consulta</Button></Container></section>
 </>}