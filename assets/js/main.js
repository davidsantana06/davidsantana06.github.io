import locale from "./config/locale.js";
import platforms from "./content/platforms.js";
import messages from "./content/i18n/messages.js";
import sections from "./content/i18n/sections.js";

document.addEventListener("alpine-i18n:ready", () => {
  window.AlpineI18n.create(locale, messages);
  document.documentElement.setAttribute("lang", locale);
});

document.addEventListener("alpine:init", () => {
  window.isEven = (number) => number % 2 === 0;
  window.Alpine.data("getPlatforms", () => ({ platforms }));
  window.Alpine.data("getSections", () => ({ sections: sections[locale] }));
});
