import { Button } from './Button';
import { Container } from './Container';

const welcome=[
 ['01','Cuidado individual','Cada atendimento começa pela escuta e pela compreensão da pessoa.'],
 ['02','Acompanhamento','Uma relação médica construída com proximidade e continuidade.'],
 ['03','Conhecimento','Medicina baseada em conhecimento e atualização científica.'],
 ['04','Agendamento','Um primeiro passo simples para começar seu cuidado.']
];
const gallery=['CLÍNICA MÉDICA','SAÚDE DA MULHER','EMAGRECIMENTO','MEDICINA DE FAMÍLIA','BEM-ESTAR','CONHECIMENTO'];
const doctors=[['DRA. BRIZAIDA','Medicina de Família e Comunidade'],['[PROFISSIONAL A VALIDAR]','Especialidade a validar'],['[PROFISSIONAL A VALIDAR]','Especialidade a validar'],['[PROFISSIONAL A VALIDAR]','Especialidade a validar']];
const news=[['18 SET','Como olhar para a saúde de forma integral'],['12 SET','Emagrecimento e cuidado individualizado']];
const departments=['Medicina de Família','Clínica Médica','Saúde da Mulher','Emagrecimento','Medicina Integrativa','Prevenção e Cuidado'];

function Media({label}:{label:string}){return <div className="template-media"><span>✳</span><strong>{label}</strong><small>Imagem oficial a inserir</small></div>}

export function HomeSections(){return <>
 <section className="welcome"><Container><div className="section-title centered"><span>WELCOME TO THE CLINIC</span><h2>Medicina que olha<br/>para <em>você.</em></h2></div><div className="welcome-grid">{welcome.map(([n,t,d])=><article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></Container></section>

 <section className="appointment"><Container className="appointment-grid"><div className="appointment-copy"><span>MAKE AN APPOINTMENT</span><h2>Agende sua<br/><em>consulta.</em></h2><p>Escolha um momento para conversar, avaliar suas necessidades e construir seu cuidado.</p></div><form onSubmit={e=>e.preventDefault()}><input placeholder="Seu nome"/><input type="email" placeholder="E-mail"/><input placeholder="Telefone"/><select defaultValue=""><option value="" disabled>Motivo da consulta</option><option>Consulta médica</option><option>Avaliação</option><option>Emagrecimento</option></select><Button type="submit">Solicitar agendamento</Button></form></Container></section>

 <section className="gallery"><Container><div className="section-title"><span>OUR GALLERY</span><h2>Áreas de <em>cuidado.</em></h2></div><div className="gallery-filters">{['SHOW ALL',...gallery].map(x=><button key={x}>{x}</button>)}</div><div className="gallery-grid">{gallery.map((x,i)=><article key={x} className={i===0?'featured':''}><Media label={x}/><div><span>{x}</span><h3>{i===0?'Cuidado individualizado':'Conheça esta área de atuação'}</h3><a href="/especialidades">Ver mais ↗</a></div></article>)}</div></Container></section>

 <section className="offer"><Container className="offer-grid"><div className="offer-copy"><span>WE OFFER BEST MEDICAL SERVICES</span><h2>Conhecimento que se transforma em <em>cuidado.</em></h2><p>Uma abordagem médica centrada na pessoa, com escuta, avaliação e acompanhamento individualizado.</p><div className="offer-points"><span>Easy appointments</span><span>Care management</span><span>Individual approach</span></div><a href="/tratamentos">Conheça os tratamentos ↗</a></div><Media label="ESPAÇO EDITORIAL · CUIDADO"/></Container></section>

 <section className="testimonials"><Container><div className="section-title centered"><span>TESTIMONIALS</span><h2>O cuidado fala<br/><em>por si.</em></h2></div><div className="testimonial-card"><div className="quote">“</div><p>[ DEPOIMENTO REAL A INSERIR ]</p><span>Nome · cidade · conteúdo pendente de autorização</span></div></Container></section>

 <section className="doctors"><Container><div className="section-title"><span>DOCTORS</span><h2>Conheça a<br/><em>Dra. Brizaida.</em></h2></div><div className="doctors-grid">{doctors.map(([n,r],i)=><article key={i}><Media label={i===0?'DRA. BRIZAIDA':'PROFISSIONAL A VALIDAR'}/><h3>{n}</h3><p>{r}</p></article>)}</div></Container></section>

 <section className="news"><Container><div className="section-title split"><div><span>OUR NEWS</span><h2>Informação também<br/>é <em>cuidado.</em></h2></div><a href="/conteudos">Ver todos os conteúdos ↗</a></div><div className="news-grid">{news.map(([date,title],i)=><article key={title}><div className="news-image"><Media label={i===0?'CONTEÚDO · SAÚDE':'CONTEÚDO · EMAGRECIMENTO'}/></div><div className="news-date">{date}</div><h3>{title}</h3><p>Conteúdo demonstrativo preparado para receber o material oficial da Dra. Brizaida.</p><a href="/conteudos">Leia mais ↗</a></article>)}</div></Container></section>

 <section className="what-we-offer"><Container><div className="section-title centered"><span>WHAT WE OFFER</span><h2>Um cuidado pensado<br/><em>para você.</em></h2></div><div className="offer-list">{['Escuta e avaliação individual','Acompanhamento médico','Saúde e prevenção'].map((x,i)=><article key={x}><b>0{i+1}</b><div><h3>{x}</h3><p>Informação demonstrativa. A descrição final será validada com a Dra. Brizaida.</p></div><a href="/tratamentos">Read More ↗</a></article>)}</div></Container></section>

 <section className="departments"><Container><div className="section-title split"><div><span>AREAS OF CARE</span><h2>Áreas de<br/><em>atuação.</em></h2></div><p>Organização inicial das áreas para apresentação do consultório. Conteúdo sujeito à validação.</p></div><div className="departments-grid">{departments.map((x,i)=><a href="/especialidades" key={x}><span>0{i+1}</span><strong>{x}</strong><b>↗</b></a>)}</div></Container></section>

 <section id="contato" className="contact-template"><Container><div className="section-title centered"><span>ANY QUESTIONS?</span><h2>Vamos <em>conversar?</em></h2></div><div className="contact-grid-template"><div><h3>Dra. Brizaida Silot Ramirez Staudt</h3><p>CRM-RS 43750 · RQE 44809</p><p>Medicina de Família e Comunidade</p><a href="https://www.instagram.com/dra.brizaida/" target="_blank" rel="noreferrer">Instagram · @dra.brizaida ↗</a></div><form onSubmit={e=>e.preventDefault()}><input placeholder="Full Name"/><input placeholder="Email Address"/><input placeholder="Subject"/><textarea placeholder="Your message" rows={5}/><Button type="submit">Enviar mensagem</Button></form></div></Container></section>

 <section className="final-template"><Container><span>UM PRIMEIRO PASSO</span><h2>Cuidar de você começa<br/>com uma <em>conversa.</em></h2><Button onClick={()=>{window.location.hash='contato'}}>Agendar consulta</Button></Container></section>
 </>}