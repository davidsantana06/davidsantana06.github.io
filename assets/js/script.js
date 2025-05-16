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
    icon: "fas fa-file-lines",
    color: { dark: "#4A81C7", light: "#154360" },
    title: "Currículo",
    href: "https://davidsantana06.github.io/resume",
  },
  {
    icon: "fab fa-linkedin",
    color: { dark: "#4C8FD9", light: "#0077B5" },
    title: "Perfil de Trabalho",
    href: "https://www.linkedin.com/in/davidsantana06",
  },
  {
    icon: "fab fa-github",
    color: { dark: "#FFFFFF", light: "#181717" },
    title: "Repositórios de Código",
    href: "https://github.com/davidsantana06?tab=repositories",
  },
];
const gamePlatforms = [
  {
    icon: "fab fa-steam",
    color: { dark: "#5AAEFF", light: "#171A21" },
    title: "Perfil de Jogos • 1",
    href: "https://steamcommunity.com/id/_turles",
  },
  {
    icon: "fab fa-playstation",
    color: { dark: "#4E7FCC", light: "#003087" },
    title: "Perfil de Jogos • 2",
    href: "https://psnprofiles.com/Upiraolf",
  },
];
const contentPlatforms = [
  {
    icon: "fab fa-youtube",
    color: { dark: "#FF4D4D", light: "#FF0000" },
    title: "Canal de Vídeos",
    href: "https://www.youtube.com/@ExJogador",
  },
];
const donatePlatforms = [
  {
    icon: "fab fa-paypal",
    color: { dark: "#4E7FCC", light: "#003087" },
    title: "Doar via PayPal",
    href: "https://www.paypal.com/donate/?hosted_button_id=2P9HPGUP7Z43S",
  },
  {
    icon: "fab fa-pix",
    color: { dark: "#3EC6BD", light: "#00BFA5" },
    title: "Doar via PIX",
    href: "https://tipa.ai/davidsantana06",
  },
];

const getUrlParams = () => {
  return new URLSearchParams(window.location.search);
};

const getTheme = (urlParams) => {
  const theme = urlParams.get("theme");
  const isThemeValid = ["dark", "light"].includes(theme);
  return isThemeValid ? theme : "dark";
};

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const getHiddenPlatforms = (urlParams) => {
  return urlParams.getAll("hide");
};

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
  ...(isGamePlatformsHidden ? [] : gamePlatforms),
  ...(isContentPlatformsHidden ? [] : contentPlatforms),
  ...(isDonatePlatformsHidden ? [] : donatePlatforms),
];
