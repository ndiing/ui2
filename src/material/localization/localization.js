import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "../../generated/locale-codes.js";

/**
 * Language map to convert language names to ISO codes.
 * @type {Object.<string, string>}
 */
const languageMap = {
    Afrikaans: "af",
    Akan: "ak",
    Albanian: "sq",
    Amharic: "am",
    Arabic: "ar",
    Armenian: "hy",
    Assamese: "as",
    Aymara: "ay",
    Azerbaijani: "az",
    Bambara: "bm",
    Bangla: "bn",
    Basque: "eu",
    Belarusian: "be",
    Bhojpuri: "bh",
    Bosnian: "bs",
    Bulgarian: "bg",
    Burmese: "my",
    Catalan: "ca",
    Cebuano: "ceb",
    "Central Kurdish": "ckb",
    "Chinese (Simplified)": "zh-Hans",
    "Chinese (Traditional)": "zh-Hant",
    Corsican: "co",
    Croatian: "hr",
    Czech: "cs",
    Danish: "da",
    Divehi: "dv",
    Dogri: "doi",
    Dutch: "nl",
    English: "en",
    Esperanto: "eo",
    Estonian: "et",
    Ewe: "ee",
    Filipino: "fil",
    Finnish: "fi",
    French: "fr",
    Galician: "gl",
    Ganda: "lg",
    Georgian: "ka",
    German: "de",
    "Goan Konkani": "gom",
    Greek: "el",
    Guarani: "gn",
    Gujarati: "gu",
    "Haitian Creole": "ht",
    Hausa: "ha",
    Hawaiian: "haw",
    Hebrew: "he",
    Hindi: "hi",
    Hmong: "hmn",
    Hungarian: "hu",
    Icelandic: "is",
    Igbo: "ig",
    Iloko: "ilo",
    Indonesian: "id",
    Irish: "ga",
    Italian: "it",
    Japanese: "ja",
    Javanese: "jv",
    Kannada: "kn",
    Kazakh: "kk",
    Khmer: "km",
    Kinyarwanda: "rw",
    Korean: "ko",
    Krio: "kri",
    Kurdish: "ku",
    Kyrgyz: "ky",
    Lao: "lo",
    Latin: "la",
    Latvian: "lv",
    Lingala: "ln",
    Lithuanian: "lt",
    Luxembourgish: "lb",
    Macedonian: "mk",
    Maithili: "mai",
    Malagasy: "mg",
    Malay: "ms",
    Malayalam: "ml",
    Maltese: "mt",
    "Manipuri (Meitei Mayek)": "mni",
    Māori: "mi",
    Marathi: "mr",
    Mizo: "lus",
    Mongolian: "mn",
    Nepali: "ne",
    "Northern Sotho": "nso",
    Norwegian: "no",
    Nyanja: "ny",
    Odia: "or",
    Oromo: "om",
    Pashto: "ps",
    Persian: "fa",
    Polish: "pl",
    Portuguese: "pt",
    Punjabi: "pa",
    Quechua: "qu",
    Romanian: "ro",
    Russian: "ru",
    Samoan: "sm",
    Sanskrit: "sa",
    "Scottish Gaelic": "gd",
    Serbian: "sr",
    Shona: "sn",
    Sindhi: "sd",
    Sinhala: "si",
    Slovak: "sk",
    Slovenian: "sl",
    Somali: "so",
    "Southern Sotho": "st",
    Spanish: "es",
    Sundanese: "su",
    Swahili: "sw",
    Swedish: "sv",
    Tajik: "tg",
    Tamil: "ta",
    Tatar: "tt",
    Telugu: "te",
    Thai: "th",
    Tigrinya: "ti",
    Tsonga: "ts",
    Turkish: "tr",
    Turkmen: "tk",
    Ukrainian: "uk",
    Urdu: "ur",
    Uyghur: "ug",
    Uzbek: "uz",
    Vietnamese: "vi",
    Welsh: "cy",
    "Western Frisian": "fy",
    Xhosa: "xh",
    Yiddish: "yi",
    Yoruba: "yo",
    Zulu: "zu",
};

/**
 * Get the current locale and set locale functions from the localization module.
 * @typedef {Object} LocalizationFunctions
 * @property {Function} getLocale - Function to retrieve the current locale.
 * @property {Function} setLocale - Function to set the current locale.
 */

/**
 * Configure localization with provided parameters.
 * @param {Object} options - Configuration options for localization.
 * @param {string} options.sourceLocale - Source locale for localization.
 * @param {string[]} options.targetLocales - Array of target locales for localization.
 * @param {Function} options.loadLocale - Function to load a specific locale.
 * @returns {LocalizationFunctions} Object containing getLocale and setLocale functions.
 */
const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: (locale) => import(`../../generated/locales/${locale}.js`),
});

export { sourceLocale, targetLocales, languageMap, getLocale, setLocale };

/**
 * Example usage of the localization module.
 * @example
 * import { setLocale, getLocale, languageMap } from "./path/to/your/module.js";
 *
 * console.log("Target Locales:", targetLocales);
 *
 * setLocale("id");
 *
 * const currentLocale = getLocale();
 * console.log("Current Locale:", currentLocale);
 *
 * const languageName = "French";
 * const isoCode = languageMap[languageName];
 * console.log(`${languageName} ISO Code:`, isoCode);
 */
