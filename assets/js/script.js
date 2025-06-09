const title = "David Santana";
const subtitle = "Progamador, designer e tudo o que você puder imaginar";

const avatar = {
  onMouseOut: {
    src: "./assets/img/base-avatar.jpeg",
    alt: "davidsantana06",
  },
  onMouseOver: {
    src: "./assets/img/hover-avatar.jpeg",
    alt: "David Santana",
  },
};

const careerPlatforms = [
  {
    icon: {
      class: "fas fa-file-lines",
      color: { dark: "#6BB7FF", light: "#0E5CAD" },
    },
    title: "Currículo",
    description:
      "Página com o resumo da minha trajetória profissional. " +
      "Se estiver pensando em me contratar, dê uma boa olhada " +
      "(sério mesmo).",
    href: "https://davidsantana06.github.io/resume",
  },
  {
    icon: {
      class: "fab fa-linkedin",
      color: { dark: "#0A66C2", light: "#0077B5" },
    },
    title: "LinkedIn",
    description:
      "Perfil profissional com algumas atualizações do que andei " +
      "fazendo nos últimos anos. Também vale a visita, caso esteja " +
      "cogitando me contratar.",
    href: "https://www.linkedin.com/in/davidsantana06",
  },
  {
    icon: {
      class: "fab fa-github",
      color: { dark: "#F0F6FC", light: "#181717" },
    },
    title: "GitHub",
    description:
      "Repositório de código com meus principais projetos e " +
      "contribuições. Se tiver dúvida se eu realmente sei programar " +
      "ou só enrolo bem, pode fuçar tudo — de cabo a rabo.",
    href: "https://github.com/davidsantana06?tab=repositories",
  },
];
const gamePlatforms = [
  {
    icon: {
      class: "fab fa-steam",
      color: { dark: "#66C0F4", light: "#1B2838" },
    },
    title: "Steam",
    description:
      "Minha plataforma de jogos atual. Migrei pra cá fugindo dos " +
      "preços surreais dos consoles. E olha, não me arrependo.",
    href: "https://steamcommunity.com/id/_turles",
  },
  {
    icon: {
      class: "fab fa-playstation",
      color: { dark: "#0082F0", light: "#003087" },
    },
    title: "PlayStation",
    description:
      "Já fui fã da tal Sony. Hoje nem tanto, mas deixo o perfil aqui " +
      "porque tem umas platinas que valem respeito.",
    href: "https://psnprofiles.com/Upiraolf",
  },
];
const contentPlatforms = [
  {
    icon: {
      class: "fab fa-youtube",
      color: { dark: "#FF4D4D", light: "#FF0000" },
    },
    title: "YouTube",
    description:
      "Canal em construção, focado em jogos e, talvez, programação. " +
      "Dá pra ver minhas habilidades com edição de vídeo — ou pelo " +
      "menos minhas tentativas",
    href: "https://www.youtube.com/@ExJogador",
  },
];
const donatePlatforms = [
  {
    icon: {
      class: "fab fa-paypal",
      color: { dark: "#009CDE", light: "#003087" },
    },
    title: "Doar via PayPal",
    href: "https://www.paypal.com/donate/?hosted_button_id=2P9HPGUP7Z43S",
  },
  {
    icon: {
      class: "fab fa-pix",
      color: { dark: "#3EC6BD", light: "#00BFA5" },
    },
    title: "Doar via Pix",
    href: "https://tipa.ai/davidsantana06",
  },
];

const blur = (element) => element.blur();

const getUrlParams = () => {
  return new URLSearchParams(window.location.search);
};

const getTheme = (urlParams) => {
  const theme = urlParams.get("theme");
  const isThemeValid = ["dark", "light"].includes(theme);
  return isThemeValid ? theme : "dark";
};

const setTheme = (theme) =>
  document.documentElement.setAttribute("data-theme", theme);

const getHiddenPlatforms = (urlParams) => urlParams.getAll("hide");

const urlParams = getUrlParams();

const theme = getTheme(urlParams);
setTheme(theme);

const hiddenPlatforms = getHiddenPlatforms(urlParams);
const isCareerPlatformsHidden = hiddenPlatforms.includes("career");
const isGamePlatformsHidden = hiddenPlatforms.includes("game");
const isContentPlatformsHidden = hiddenPlatforms.includes("content");
const isDonatePlatformsHidden = hiddenPlatforms.includes("donate");

const platforms = [
  ...(isCareerPlatformsHidden ? [] : careerPlatforms),
  ...(isContentPlatformsHidden ? [] : contentPlatforms),
  ...(isGamePlatformsHidden ? [] : gamePlatforms),
  ...(isDonatePlatformsHidden ? [] : donatePlatforms),
];
