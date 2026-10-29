/* ==========================================================
   CONFIGURAÇÃO — edite apenas esta área para atualizar o site
   ========================================================== */
const CONFIG = {
  brand: "Rafael Pacheco", // Nome ou marca pessoal (confirme como quer aparecer)
  role: "Estudante de Sistemas de Informação",
  headline: "Software simples, bem feito e com comunicação clara.",
  intro:
    "Sou estudante de Sistemas de Informação e tenho formação técnica em andamento em informática. Desenvolvo sites, scripts, automações e aplicações simples, com atenção ao que você realmente precisa.",
  about:
    "Estou no início da carreira em tecnologia e uso projetos próprios para praticar e aprender. Gosto de entender o problema antes de escrever código e prefiro combinar escopos pequenos e entregáveis a prometer o que ainda não domino.",

  // PREENCHER: número com código do país e DDD, só dígitos. Ex.: "5527998048418"
  whatsappNumber: "",

  // PREENCHER: Instagram e LinkedIn (URL completa). GitHub já preenchido.
  social: {
    whatsapp: "", // gerado automaticamente a partir do número acima
    instagram:
      "https://www.instagram.com/_eurafaelpacheco?vrfl=azQxdzB6eGs1czZw&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/rafael-pacheco-738074300/",
    github: "https://github.com/RafaelPachec0",
  },

  skills: [
    "Python",
    "C#",
    "SQL e bancos relacionais",
    "HTML, CSS e JavaScript",
    "Lógica de programação e aplicações",
    "Git e GitHub",
  ],

  // PREÇOS — altere somente os números "price"
  services: [
    {
      id: "landing",
      name: "Landing page simples",
      price: 450,
      unit: "",
      desc: "Uma página para apresentar um produto, serviço ou evento.",
      examples: [
        "Página de divulgação",
        "Página com links e botão de contato",
        "Convite ou evento",
      ],
    },
    {
      id: "institucional",
      name: "Site institucional de página única",
      price: 650,
      unit: "",
      desc: "Um site de uma página com as informações essenciais do seu negócio.",
      examples: [
        "Apresentação do negócio",
        "Serviços e contato",
        "Mapa e redes sociais",
      ],
    },
    {
      id: "script",
      name: "Script simples em Python",
      price: 100,
      unit: "",
      desc: "Pequenos programas para resolver uma tarefa específica.",
      examples: [
        "Renomear ou organizar arquivos",
        "Cálculos e conversões",
        "Leitura de planilhas CSV",
      ],
    },
    {
      id: "automacao",
      name: "Automação simples em Python",
      price: 200,
      unit: "",
      desc: "Automação de tarefas repetitivas de escopo reduzido.",
      examples: [
        "Processamento de arquivos em lote",
        "Geração de relatórios simples",
        "Rotinas locais no computador",
      ],
    },
    {
      id: "csharp",
      name: "Aplicação desktop básica em C#",
      price: 250,
      unit: "",
      desc: "Programa simples para Windows, com telas e regras básicas.",
      examples: [
        "Cadastro simples",
        "Calculadora específica",
        "Controle básico de dados",
      ],
    },
    {
      id: "sql",
      name: "Consultoria ou auxílio com SQL básico",
      price: 80,
      unit: "",
      desc: "Ajuda com consultas e noções de banco de dados relacional.",
      examples: [
        "Consultas SELECT, JOIN e filtros",
        "Modelagem básica de tabelas",
        "Revisão de consultas",
      ],
    },
    {
      id: "manutencao",
      name: "Manutenção de site simples",
      price: 50,
      unit: "/mês",
      desc: "Pequenos ajustes e atualizações em sites simples.",
      examples: [
        "Troca de textos e imagens",
        "Correções pontuais",
        "Atualização de links",
      ],
    },
  ],

  // PROJETOS — somente projetos autorais (não acadêmicos).
  // "tech": inclua somente o que você confirmar no repositório.
  // "draft: true" mostra o aviso de descrição provisória; mude para false após revisar.
  projects: [
    {
      name: "Vascotron — assistente de voz em Python",
      desc: "Assistente de voz desenvolvido em Python.",
      tech: ["Python"],
      repo: "https://github.com/RafaelPachec0/IAdeVoz-Vascotron",
      draft: false,
    },
    {
      name: "Projeto Glossify",
      desc: "Projeto de um software de gerenciamento para um salão de beleza.",
      tech: [],
      repo: "https://github.com/RafaelPachec0/Glossify-Software",
      draft: false,
    },
  ],
};
/* ============== FIM DA CONFIGURAÇÃO ============== */

const $ = (s) => document.querySelector(s);
const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
};
const brl = (n) => "R$ " + n.toLocaleString("pt-BR");

function waLink(msg) {
  const base = CONFIG.whatsappNumber
    ? "https://wa.me/" + CONFIG.whatsappNumber
    : "https://wa.me/";
  return base + "?text=" + encodeURIComponent(msg);
}

const ICONS = {
  whatsapp:
    "M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.300 1.200-1.800 1.200-.5.1-1 .2-3.300-.7-2.800-1.100-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 1.900c.1.200.1.300 0 .5l-.3.500-.4.400c-.1.200-.3.300-.1.600.2.300.7 1.200 1.600 1.900 1.100 1 2 1.300 2.300 1.400.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l1.800.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400Z",
  instagram:
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.500a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9Zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5Zm5.300-3.300a1.100 1.100 0 1 1 0 2.200 1.100 1.100 0 0 1 0-2.200Z",
  linkedin:
    "M4.500 3A2.500 2.500 0 1 1 4.500 8 2.500 2.500 0 0 1 4.500 3ZM2.500 9.500h4V21h-4V9.500Zm7 0h3.800v1.600c.6-1 1.900-1.900 3.800-1.900 4 0 4.400 2.600 4.400 6V21h-4v-5c0-1.300 0-3-1.900-3s-2.100 1.400-2.100 2.900V21h-4V9.500Z",
  github:
    "M12 2a10 10 0 0 0-3.200 19.500c.5.1.7-.2.7-.5v-1.800c-2.800.6-3.400-1.200-3.400-1.200-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.1-.6.1-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.400 1.100 3 .8.1-.7.4-1.100.6-1.400-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.800 1a9.600 9.600 0 0 1 5 0c1.900-1.300 2.800-1 2.800-1 .5 1.400.2 2.400.1 2.700.6.7 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800v2.700c0 .3.200.6.700.5A10 10 0 0 0 12 2Z",
};
const LABELS = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  github: "GitHub",
};

function ext(a, href) {
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

function renderSocial(target) {
  const links = {
    ...CONFIG.social,
    whatsapp: waLink(
      "Olá! Vi seu site e gostaria de conversar sobre um serviço de desenvolvimento.",
    ),
  };
  Object.keys(LABELS).forEach((k) => {
    if (!links[k]) return; // oculta redes ainda não preenchidas
    const li = el("li"),
      a = ext(el("a"), links[k]);
    a.setAttribute("aria-label", LABELS[k]);
    a.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' +
      ICONS[k] +
      '"/></svg>';
    a.append(LABELS[k]);
    li.append(a);
    target.append(li);
  });
}

function init() {
  // Textos configuráveis
  document.querySelectorAll("[data-bind]").forEach((n) => {
    const v = CONFIG[n.dataset.bind];
    if (v) n.textContent = v;
  });

  // Botões do WhatsApp
  document
    .querySelectorAll("[data-wa]")
    .forEach((a) => ext(a, waLink(a.dataset.wa)));
  if (!CONFIG.whatsappNumber)
    console.warn(
      "Defina CONFIG.whatsappNumber em script.js para os botões abrirem a sua conversa.",
    );

  // Habilidades
  CONFIG.skills.forEach((s) => $("#skills").append(el("li", "", s)));

  // Serviços
  CONFIG.services.forEach((s) => {
    const c = el("article", "card");
    c.append(el("h3", "", s.name), el("p", "", s.desc));
    const ul = el("ul");
    s.examples.forEach((x) => ul.append(el("li", "", x)));
    c.append(ul);
    const p = el("p", "price");
    p.append("a partir de ");
    p.append(el("strong", "", brl(s.price) + s.unit));
    c.append(p);
    const a = ext(
      el("a", "btn", "Solicitar orçamento"),
      waLink(
        "Olá! Vi seu site e gostaria de solicitar um orçamento para: " +
          s.name +
          ".",
      ),
    );
    c.append(a);
    $("#services").append(c);
  });

  // Projetos
  CONFIG.projects.forEach((p) => {
    const c = el("article", "card");
    c.append(el("h3", "", p.name), el("p", "", p.desc));
    if (p.tech.length) {
      const t = el("ul", "tech");
      p.tech.forEach((x) => t.append(el("li", "", x)));
      c.append(t);
    }
    if (p.draft)
      c.append(el("p", "draft", "Descrição provisória, a ser revisada."));
    c.append(ext(el("a", "btn btn--ghost", "Ver no GitHub"), p.repo));
    $("#projects").append(c);
  });

  renderSocial($("#social"));
  renderSocial($("#socialFooter"));
  $("#year").textContent = new Date().getFullYear();

  // Menu móvel
  const btn = $("#menuBtn"),
    nav = $("#nav");
  const close = () => {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };
  btn.addEventListener("click", () => {
    const o = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(o));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
document.addEventListener("DOMContentLoaded", init);
