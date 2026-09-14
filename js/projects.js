const projects = [
  {
    id: "netsweep",
    title: "NetSweep",
    stack: "Python",
    description: {
      pt: "Scanner de rede local via terminal utilizado para mapear dispositivos conectados à rede.",
      en: "Local network scanner via terminal used to map devices connected to the network.",
      es: "Escáner de red local por terminal utilizado para mapear dispositivos conectados a la red."
    },
    links: [
      {
        label: { pt: "GitHub", en: "GitHub", es: "GitHub" },
        url: "https://github.com/FellipFB/netsweep"
      }
    ]
  },

  {
    id: "outofthisorbit",
    title: "OutOfThisOrbit",
    stack: "Python",
    description: {
      pt: "Script que calcula o ESI (Earth Similarity Index) de exoplanetas e lista os 10 mais próximos da Terra a partir dos parâmetros utilizados, consumindo a API oficial da NASA.",
      en: "Script that calculates the ESI (Earth Similarity Index) of exoplanets and lists the 10 closest to Earth based on the parameters used, consuming NASA's official API.",
      es: "Script que calcula el ESI (Earth Similarity Index) de exoplanetas y lista los 10 más cercanos a la Tierra según los parámetros utilizados, consumiendo la API oficial de la NASA."
    },
    links: [
      {
        label: { pt: "GitHub", en: "GitHub", es: "GitHub" },
        url: "https://github.com/FellipFB/OutOfThisOrbit"
      }
    ]
  },

  {
    id: "qterm",
    title: "QTerm",
    stack: "Go",
    description: {
      pt: "Cliente de terminal não-oficial para o portal acadêmico da faculdade. Criado para evitar abrir o portal pelo navegador ou pelo celular. Projeto pessoal de aprendizado prático.",
      en: "Unofficial terminal client for the college academic portal. Built to avoid opening the portal in the browser or on the phone. Personal practical learning project.",
      es: "Cliente de terminal no oficial para el portal académico de la facultad. Creado para evitar abrir el portal en el navegador o en el celular. Proyecto personal de aprendizaje práctico."
    },
    links: []  // ainda não público, adicionar depois
  },

  // ---------- COPIAR ----------
  /*
  {
    id: "meu-novo-projeto",
    title: "Nome do Projeto",
    stack: "Python · Flask",
    description: {
      pt: "Descrição curta e objetiva em português.",
      en: "Short and objective description in English.",
      es: "Descripción corta y objetiva en español."
    },
    links: [
      {
        label: { pt: "GitHub", en: "GitHub", es: "GitHub" },
        url: "https://github.com/FellipFB/..."
      }
    ]
  },
  */
];

function renderProjects(lang = "pt") {
  const container = document.getElementById("projects-list");
  if (!container) return;

  container.innerHTML = projects
    .map((project) => {
      const desc = project.description[lang] || project.description.pt;
      const linksHtml = project.links
        .map(
          (link) =>
            `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${
              link.label[lang] || link.label.pt
            }</a>`
        )
        .join("");

      return `
        <article class="project-card" role="listitem">
          <div class="project-card__header">
            <h3 class="project-card__title">${project.title}</h3>
            <span class="project-card__stack">${project.stack}</span>
          </div>
          <p class="project-card__desc">${desc}</p>
          ${
            linksHtml
              ? `<div class="project-card__links">${linksHtml}</div>`
              : ""
          }
        </article>
      `;
    })
    .join("");
}

