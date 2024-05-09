import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

export const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

new MutationObserver(() => {
    const lang=document.documentElement.lang
    setLocale(lang);
}).observe(document.documentElement, {
    attributes: ["lang"],
});
