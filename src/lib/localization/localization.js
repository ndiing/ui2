import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

export const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

new MutationObserver(() => {
    setLocale(document.documentElement.lang);
}).observe(document.documentElement, {
    attributes: ["lang"],
});
