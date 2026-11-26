const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();


const solutionData = {
  cameras: {
    link: 'cameras-de-seguranca.html',
    image: 'assets/solucoes-v3-cameras.jpg',
    meta: 'Residencial · Comercial · Condomínios',
    title: 'Câmeras de segurança',
    description: 'Monitoramento inteligente para proteger seu patrimônio e acompanhar ambientes estratégicos com mais tranquilidade.',
    benefits: ['Monitoramento de ambientes', 'Mais controle do patrimônio', 'Projeto sob medida'],
    label: 'Segurança eletrônica'
  },
  alarmes: {
    link: 'alarmes.html',
    image: 'assets/solucoes-v3-alarmes.jpg',
    meta: 'Proteção · Detecção · Resposta',
    title: 'Alarmes',
    description: 'Sistemas de alarme para reforçar a proteção do imóvel e ampliar a percepção de segurança no dia a dia.',
    benefits: ['Proteção de áreas críticas', 'Soluções para diferentes ambientes', 'Instalação profissional'],
    label: 'Proteção ativa'
  },
  cerca: {
    link: 'cerca-eletrica.html',
    image: 'assets/solucoes-v3-cerca.jpg',
    meta: 'Perímetro · Residencial · Comercial',
    title: 'Cerca elétrica',
    description: 'Proteção perimetral pensada de acordo com as características do imóvel e os pontos mais sensíveis do espaço.',
    benefits: ['Proteção perimetral', 'Planejamento por ambiente', 'Integração com outras soluções'],
    label: 'Proteção perimetral'
  },
  portao: {
    link: 'motores-de-portao.html',
    image: 'assets/solucao-portao.png',
    meta: 'Acesso · Praticidade · Segurança',
    title: 'Motores de portão',
    description: 'Automatização para tornar entradas e saídas mais rápidas, seguras e adequadas à rotina do imóvel.',
    benefits: ['Mais praticidade no acesso', 'Automatização sob medida', 'Soluções para diferentes portões'],
    label: 'Automação de acesso'
  },
  fechaduras: {
    link: 'fechaduras-digitais.html',
    image: 'assets/solucao-fechaduras.png',
    meta: 'Acesso · Tecnologia · Controle',
    title: 'Fechaduras digitais',
    description: 'Tecnologia aplicada ao controle de acesso para trazer mais praticidade, segurança e modernidade ao ambiente.',
    benefits: ['Acesso mais prático', 'Controle de entrada', 'Aplicações residenciais e comerciais'],
    label: 'Acesso inteligente'
  },
  acesso: {
    link: 'controle-de-acesso.html',
    image: 'assets/solucoes-v3-acesso.jpg',
    meta: 'Empresas · Condomínios · Residências',
    title: 'Controle de acesso',
    description: 'Soluções para organizar a entrada de pessoas, restringir áreas e aumentar o controle sobre a circulação.',
    benefits: ['Gestão de entradas', 'Mais controle de circulação', 'Soluções integradas'],
    label: 'Gestão de acesso'
  },
  automacao: {
    link: 'automacao.html',
    image: 'assets/solucoes-v3-automacao.jpg',
    meta: 'Conforto · Eficiência · Tecnologia',
    title: 'Automação',
    description: 'Tecnologia aplicada à rotina para simplificar tarefas, melhorar acessos e tornar o imóvel mais funcional.',
    benefits: ['Mais praticidade', 'Rotinas automatizadas', 'Soluções personalizadas'],
    label: 'Tecnologia aplicada'
  },
  serralheria: {
    link: 'serralheria.html',
    image: 'assets/solucoes-v3-serralheria.jpg',
    meta: 'Sob medida · Estrutura · Acabamento',
    title: 'Serralheria',
    description: 'Projetos e execuções sob medida para complementar acessos, estruturas e necessidades específicas do ambiente.',
    benefits: ['Execução sob medida', 'Aplicações residenciais e comerciais', 'Integração com o projeto'],
    label: 'Soluções metálicas'
  }
};

Object.assign(solutionData, {
  "copias": {
    "link": "copias-de-chaves.html",
    "image": "assets/solucoes-v3-copias.jpg",
    "meta": "Chaveiro · Loja física",
    "title": "Cópias de chaves",
    "description": "Serviço de cópias de chaves com atendimento presencial e orientação conforme o tipo de chave.",
    "benefits": [
      "Cópias de chaves",
      "Atendimento na loja",
      "Diversos modelos"
    ],
    "label": "Chaveiro"
  },
  "automotivas": {
    "link": "chaves-automotivas.html",
    "image": "assets/solucoes-v3-automotivas.jpg",
    "meta": "Chaveiro · Automotivo",
    "title": "Chaves automotivas codificadas",
    "description": "Programação e solução para chaves automotivas codificadas, conforme a necessidade do veículo.",
    "benefits": [
      "Chaves codificadas",
      "Programação",
      "Consulta por veículo"
    ],
    "label": "Chaveiro · Automotivo"
  },
  "abertura": {
    "link": "abertura-de-portas-e-veiculos.html",
    "image": "assets/solucoes-v3-abertura.jpg",
    "meta": "Chaveiro · Atendimento",
    "title": "Abertura de portas e veículos",
    "description": "Atendimento para abertura de portas e veículos com atuação profissional e foco em agilidade.",
    "benefits": [
      "Abertura de portas",
      "Abertura de veículos",
      "Atendimento especializado"
    ],
    "label": "Chaveiro"
  },
  "fechaduras": {
    "link": "fechaduras-digitais.html",
    "image": "assets/solucoes-v3-fechaduras.jpg",
    "meta": "Instalação · Manutenção",
    "title": "Fechaduras eletrônicas",
    "description": "Instalação e manutenção de fechaduras eletrônicas para mais praticidade, tecnologia e controle de acesso.",
    "benefits": [
      "Instalação",
      "Manutenção",
      "Configuração"
    ],
    "label": "Instalação · Manutenção"
  },
  "portao": {
    "link": "motores-de-portao.html",
    "image": "assets/solucoes-v3-portoes.jpg",
    "meta": "Instalação · Manutenção",
    "title": "Controles e portões",
    "description": "Instalação e manutenção de controles, motores e portões para um acesso mais seguro e prático.",
    "benefits": [
      "Instalação",
      "Manutenção",
      "Automação de acesso"
    ],
    "label": "Instalação · Manutenção"
  },
  "assistencia": {
    "link": "assistencia-tecnica.html",
    "image": "assets/solucoes-v3-assistencia.jpg",
    "meta": "Assistência técnica",
    "title": "Assistência técnica de celulares e computadores",
    "description": "Manutenção em geral de celulares e computadores com atendimento técnico e foco em qualidade.",
    "benefits": [
      "Celulares",
      "Computadores",
      "Manutenção em geral"
    ],
    "label": "Assistência técnica"
  }
});

const solutionTabs = document.querySelectorAll('.solution-tab');
const solutionStage = document.querySelector('.solution-stage');
const solutionVisual = document.getElementById('solutionVisual');
const solutionImage = document.getElementById('solutionImage');
const solutionMeta = document.getElementById('solutionMeta');
const solutionTitle = document.getElementById('solutionTitle');
const solutionDescription = document.getElementById('solutionDescription');
const solutionBenefits = document.getElementById('solutionBenefits');
const solutionLink = document.getElementById('solutionLink');

function setSolution(key){
  const data = solutionData[key];
  if(!data) return;

  solutionTabs.forEach(tab => {
    const isActive = tab.dataset.solution === key;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  if(solutionStage) solutionStage.classList.add('is-changing');

  window.setTimeout(() => {
    solutionMeta.textContent = data.meta;
    solutionTitle.textContent = data.title;
    solutionDescription.textContent = data.description;
    solutionBenefits.innerHTML = data.benefits.map(item => `<span>${item}</span>`).join('');
    solutionVisual.dataset.theme = key;
    if(solutionLink) solutionLink.href = data.link;
    if(solutionImage){
      const mobileSource = document.getElementById('solutionMobileSource');
      if (mobileSource) mobileSource.srcset = data.image.replace(/\.[^.]+$/, '-mobile.webp');
      solutionImage.src = data.image;
      solutionImage.alt = data.title;
    }
    if(solutionStage) solutionStage.classList.remove('is-changing');
  }, 110);
}

solutionTabs.forEach(tab => {
  tab.addEventListener('click', () => setSolution(tab.dataset.solution));

  if(window.matchMedia('(hover:hover)').matches){
    tab.addEventListener('mouseenter', () => setSolution(tab.dataset.solution));
  }
});

// Hero: dois banners, com navegação e pausa manual.
const heroCarousel = document.querySelector('.hero-carousel');
if (heroCarousel) {
  const slides = [...heroCarousel.querySelectorAll('[data-hero-slide]')];
  const dots = [...heroCarousel.querySelectorAll('[data-hero-dot]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, timer, paused = reduced.matches, hovering = false, focused = false;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide,i) => { slide.hidden = i !== current; const video = slide.querySelector('video'); if(video) { if(slide.hidden) video.pause(); else video.play().catch(()=>{}); } });
    dots.forEach((dot,i) => dot.setAttribute('aria-pressed', String(i === current)));
  }
  function schedule() { clearInterval(timer); if(!paused && !hovering && !focused && !document.hidden) timer = setInterval(()=>show(current+1), 8500); }
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>{show(i);schedule();}));
  heroCarousel.querySelector('[data-hero-prev]').addEventListener('click',()=>{show(current-1);schedule();});
  heroCarousel.querySelector('[data-hero-next]').addEventListener('click',()=>{show(current+1);schedule();});
  heroCarousel.addEventListener('mouseenter',()=>{hovering=true;schedule();});
  heroCarousel.addEventListener('mouseleave',()=>{hovering=false;schedule();});
  heroCarousel.addEventListener('focusin',()=>{focused=true;schedule();});
  heroCarousel.addEventListener('focusout',e=>{if(!heroCarousel.contains(e.relatedTarget)){focused=false;schedule();}});
  document.addEventListener('visibilitychange',schedule);
  schedule();
}
