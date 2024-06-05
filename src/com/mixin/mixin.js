import { html } from "lit";
import { choose } from "lit/directives/choose.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * Converts a string to PascalCase.
 *
 * This function transforms a given string to PascalCase, where the first letter of each word is capitalized
 * and all non-alphanumeric characters are removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in PascalCase.
 */
function toPascalCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to camelCase.
 *
 * This function transforms a given string to camelCase, where the first letter of the first word is lowercase
 * and the first letter of each subsequent word is capitalized, with all non-alphanumeric characters removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in camelCase.
 */
function toCamelCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => ($0 == 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to snake_case.
 *
 * This function transforms a given string to snake_case, where each word is lowercase and separated by underscores,
 * with all non-alphanumeric characters removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in snake_case.
 */
function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to kebab-case.
 *
 * This function transforms a given string to kebab-case, where each word is lowercase and separated by hyphens,
 * with all non-alphanumeric characters removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in kebab-case.
 */
function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to flatcase.
 *
 * This function transforms a given string to flatcase, where all words are concatenated in lowercase
 * and all non-alphanumeric characters are removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in flatcase.
 */
function toFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to UPPERFLATCASE.
 *
 * This function transforms a given string to UPPERFLATCASE, where all words are concatenated in uppercase
 * and all non-alphanumeric characters are removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in UPPERFLATCASE.
 */
function toUpperFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to Pascal_Snake_Case.
 *
 * This function transforms a given string to Pascal_Snake_Case, where each word is capitalized and separated
 * by underscores, with all non-alphanumeric characters removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in Pascal_Snake_Case.
 */
function toPascalSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to camel_Snake_Case.
 *
 * This function transforms a given string to camel_Snake_Case, where the first letter of the first word is lowercase
 * and the first letter of each subsequent word is capitalized, with words separated by underscores.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in camel_Snake_Case.
 */
function toCamelSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + ($0 == 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to SCREAMING_SNAKE_CASE.
 *
 * This function transforms a given string to SCREAMING_SNAKE_CASE, where each word is uppercase and separated
 * by underscores, with all non-alphanumeric characters removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in SCREAMING_SNAKE_CASE.
 */
function toScreamingSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to Train-Case.
 *
 * This function transforms a given string to Train-Case, where each word is capitalized and separated by hyphens,
 * with all non-alphanumeric characters removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in Train-Case.
 */
function toTrainCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "-" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to COBOL-CASE.
 *
 * This function transforms a given string to COBOL-CASE, where each word is uppercase and separated by hyphens,
 * with all non-alphanumeric characters removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in COBOL-CASE.
 */
function toCobolCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "-" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to Title Case.
 *
 * This function transforms a given string to Title Case, where each word is capitalized and separated by spaces,
 * with all non-alphanumeric characters removed.
 *
 * @param {String} string - The string to be converted.
 * @returns {String} The converted string in Title Case.
 */
function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Creates a queue to ensure that asynchronous callbacks are executed in order.
 *
 * This function returns an `enqueue` function that schedules a callback to be executed sequentially, ensuring
 * that each callback runs after the previous one has completed.
 *
 * @returns {Function} The `enqueue` function which takes a callback to be executed in the queue.
 */
function queue() {
    let pending = Promise.resolve();

    async function execute(callback) {
        try {
            await pending;
        } finally {
            return callback();
        }
    }

    return function enqueue(callback) {
        return (pending = execute(callback));
    };
}

/**
 * Gets the ISO week number of the date.
 *
 * This method calculates the ISO 8601 week number (1-53) for the current date.
 *
 * @returns {Number} The ISO week number of the date.
 */
Date.prototype.getWeek = function () {
    let date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    let week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};

/**
 * Sets the date to the start of the specified ISO week and year.
 *
 * This method sets the date to the first day (Monday) of the specified ISO week in the given year.
 *
 * @param {Number} week - The ISO week number to set (1-53).
 * @param {Number} year - The year in which the week occurs.
 * @returns {Date} The modified date object.
 */
Date.prototype.setWeek = function (week, year) {
    let date = new Date(year, 0, 1);
    let dayOfWeek = date.getDay();
    let dayAdjustment = dayOfWeek <= 4 ? dayOfWeek - 1 : dayOfWeek - 8;
    date.setDate(date.getDate() - dayAdjustment + 3);
    date.setDate(date.getDate() + (week - 1) * 7);
    date.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    this.setTime(date.getTime());
    return this;
};

/**
 * Checks if a value is not empty.
 *
 * This function returns true if the given value is not undefined, not null, and not an empty string.
 *
 * @param {*} value - The value to check.
 * @returns {Boolean} True if the value is not empty, otherwise false.
 */
function notEmpty(value) {
    return value !== undefined && value !== null && value !== "";
}

export { toPascalCase, toCamelCase, toSnakeCase, toKebabCase, toFlatCase, toUpperFlatCase, toPascalSnakeCase, toCamelSnakeCase, toScreamingSnakeCase, toTrainCase, toCobolCase, toTitleCase, queue, notEmpty };
