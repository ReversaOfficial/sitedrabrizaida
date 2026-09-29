export const doctor={name:'Dra. Brizaida',fullName:'Dra. Brizaida Silot Ramirez Staudt',crm:'CRM-RS 43750',specialty:'Medicina de Família e Comunidade',rqe:'RQE 44809',instagram:'https://www.instagram.com/dra.brizaida/'} as const;

export type Course={slug:string;title:string;excerpt:string;status:'available'|'coming-soon';imageLabel:string};

export const courses:Course[]=[
  // Quando um curso real for publicado, adicionar aqui.
  // O mesmo cadastro será usado na página /cursos e na seção Cursos da Home.
] as Course[];
