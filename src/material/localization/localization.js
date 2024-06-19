import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

/**
 * Function to configure localization settings and provide methods for getting and setting locale.
 * @param {Object} options - Configuration options for localization.
 * @param {string} options.sourceLocale - The source locale used as a fallback.
 * @param {Array<string>} options.targetLocales - Array of target locales to support.
 * @param {function(string): Promise<any>} options.loadLocale - Function to load a specific locale's data.
 * @returns {Object} An object containing methods for getting and setting locale.
 */
export const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});
