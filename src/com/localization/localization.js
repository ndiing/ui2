import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

/**
 *
 */
class MDLocalizationModule {
    /**
     *
     */
    constructor() {
        const { getLocale, setLocale } = configureLocalization({
            sourceLocale,
            targetLocales,
            loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
        });
        this.getLocale = getLocale;
        this.setLocale = setLocale;
        this.callback = this.callback.bind(this);
        this.init();
    }

    /**
     *
     */
    init() {
        this.callback();
        new MutationObserver(this.callback).observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"],
        });
    }

    /**
     *
     */
    callback() {
        const lang = document.documentElement.lang;
        this.setLocale(targetLocales.find((tl) => tl === lang) ?? sourceLocale);
        const event = new CustomEvent("onLangChange", {
            bubbles: true,
            cancelable: true,
        });
        window.dispatchEvent(event);
    }
}

const localization = new MDLocalizationModule();

export { localization };
