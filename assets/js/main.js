import locale from "./config/locale.js";
import platforms from "./content/platforms.js";
import messages from "./content/i18n/messages.js";
import sections from "./content/i18n/sections.js";

const CAREER_START_DATE = new Date(2022, 8, 1);

const getYearsSince = (start, now = new Date()) => {
  const years = now.getFullYear() - start.getFullYear();
  const anniversary = new Date(now.getFullYear(), start.getMonth(), start.getDate());
  return now < anniversary ? years - 1 : years;
};

document.addEventListener("alpine-i18n:ready", () => {
  window.AlpineI18n.create(locale, messages);
  document.documentElement.setAttribute("lang", locale);
});

document.addEventListener("alpine:init", () => {
  window.isEven = (number) => number % 2 === 0;
  window.Alpine.data("getPlatforms", () => ({ platforms }));
  window.Alpine.data("getYearsOfExperience", () => ({
    yearsOfExperience: getYearsSince(CAREER_START_DATE),
  }));
  window.Alpine.data("getSections", () => ({ sections: sections[locale] }));
});

document.addEventListener("alpine:initialized", () => {
  document.documentElement.classList.add("is-ready");
});
