const blur = (element) => element.blur();

const isEven = (number) => number % 2 === 0;

const getTitle = () => "David Santana";

const getSubtitle = () => "Programador e tudo o que você puder imaginar";

const getAvatar = () => {
  return {
    onMouseOut: {
      src: "./assets/img/base-avatar.jpeg",
      alt: "davidsantana06",
    },
    onMouseOver: {
      src: "./assets/img/hover-avatar.jpeg",
      alt: "David Santana",
    },
  };
};

const getPlatforms = (hiddenSections) => {
  const careerPlatforms = [
    {
      icon: "fas fa-file-lines",
      title: "Currículo",
      description:
        "Documento com o resumo da minha trajetória profissional. " +
        "Se estiver pensando em me contratar, dê uma boa olhada " +
        "(sério mesmo).",
      href: `./assets/docs/David Santana — Desenvolvedor Full Stack (Currículo).pdf`,
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      description:
        "Perfil profissional com atualizações do que andei fazendo " +
        "nos últimos anos. Também vale a visita, caso esteja cogitando " +
        "me contratar.",
      href: "https://www.linkedin.com/in/davidsantana06",
    },
  ];

  const codePlatforms = [
    {
      icon: "fab fa-github",
      title: "GitHub",
      description:
        "Repositório de código com meus principais projetos e " +
        "contribuições. Se tiver dúvida se eu realmente sei programar " +
        "ou só enrolo bem, pode fuçar tudo — de cabo a rabo.",
      href: "https://github.com/davidsantana06",
    },
  ];

  const contentPlatforms = [
    {
      icon: "fab fa-youtube",
      title: "YouTube",
      description:
        "Canal focado em programação, ainda em construção. Dá pra ver " +
        "minhas habilidades em edição — ou pelo menos minhas tentativas",
      href: "https://www.youtube.com/@davidsantana06",
    },
  ];

  const gamePlatforms = [
    {
      icon: "fab fa-steam",
      title: "Steam",
      description:
        "Minha plataforma de jogos atual. Migrei pra cá fugindo dos " +
        "preços surreais dos consoles. E olha, não me arrependo.",
      href: "https://steamcommunity.com/id/davidsantana06",
    },
    {
      icon: "fab fa-playstation",
      title: "PlayStation",
      description:
        "Já fui fã da tal Sony. Hoje nem tanto, mas deixo o perfil aqui " +
        "porque tem umas platinas que valem respeito.",
      href: "https://psnprofiles.com/Upiraolf",
    },
  ];

  const donatePlatforms = [
    {
      icon: "fab fa-paypal",
      title: "Doar via PayPal",
      href: "https://www.paypal.com/donate/?hosted_button_id=2P9HPGUP7Z43S",
    },
    {
      icon: "fab fa-pix",
      title: "Doar via Pix",
      href: "https://tipa.ai/davidsantana06",
    },
  ];

  return [
    ...(hiddenSections.includes("career") ? [] : careerPlatforms),
    ...(hiddenSections.includes("code") ? [] : codePlatforms),
    ...(hiddenSections.includes("content") ? [] : contentPlatforms),
    ...(hiddenSections.includes("game") ? [] : gamePlatforms),
    ...(hiddenSections.includes("donate") ? [] : donatePlatforms),
  ];
};

const getUrlParams = () => new URLSearchParams(window.location.search);

const getTheme = (urlParams) => {
  const theme = urlParams.get("t");
  const isValid = ["dark", "light"].includes(theme);
  return isValid ? theme : "dark";
};

const setTheme = (theme) =>
  document.documentElement.setAttribute("data-theme", theme);

const getHiddenSections = (urlParams) => urlParams.getAll("h");

const urlParams = getUrlParams();

const theme = getTheme(urlParams);
setTheme(theme);

const hiddenSections = getHiddenSections(urlParams);
