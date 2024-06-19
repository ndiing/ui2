/* String Formatting Functions */

/**
 * Converts a string to PascalCase.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to PascalCase.
 */
function toPascalCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to camelCase.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to camelCase.
 */
function toCamelCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2, $0) => ($0 == 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to snake_case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to snake_case.
 */
function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to kebab-case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to kebab-case.
 */
function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to flatcase.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to flatcase.
 */
function toFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to UPPERFLATCASE.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to UPPERFLATCASE.
 */
function toUpperFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to Pascal_Snake_Case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to Pascal_Snake_Case.
 */
function toPascalSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to camel_Snake_Case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to camel_Snake_Case.
 */
function toCamelSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2, $0) => "_" + ($0 == 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to SCREAMING_SNAKE_CASE.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to SCREAMING_SNAKE_CASE.
 */
function toScreamingSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "_" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to Train-Case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to Train-Case.
 */
function toTrainCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to COBOL-CASE.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to COBOL-CASE.
 */
function toCobolCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + "-" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 * Converts a string to Title Case.
 * @param {string} string - The input string to convert.
 * @returns {string} The string converted to Title Case.
 */
function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, (_$, $1, $2) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, (_$, _$1, $2) => " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/* Datetime Functions */
/**
 * Formats a date object as a datetime-local string.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted datetime-local string (YYYY-MM-DDTHH:MM).
 */
function stringifyDatetimeLocal(date) {
    const pad = (n) => String(n).padStart(2, "0");

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/**
 * Formats a date object as a date string.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string (YYYY-MM-DD).
 */
function stringifyDate(date) {
    const pad = (n) => String(n).padStart(2, "0");

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/**
 * Formats a date object as a year string.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted year string (YYYY).
 */
function stringifyYear(date) {
    return `${date.getFullYear()}`;
}

/**
 * Formats a date object as a month string.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted month string (YYYY-MM).
 */
function stringifyMonth(date) {
    const pad = (n) => String(n).padStart(2, "0");

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

/**
 * Formats a date object as a time string.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted time string (HH:MM).
 */
function stringifyTime(date) {
    const pad = (n) => String(n).padStart(2, "0");

    return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/**
 * Formats a date object as an ISO 8601 week string.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted ISO 8601 week string (YYYY-WWW).
 */
function stringifyWeek(date) {
    let year = date.getFullYear();
    let week = date.getWeek();
    return `${year}-W${week < 10 ? "0" + week : week}`;
}

/* Parsing Functions */

/**
 * Parses a datetime-local string into a date object.
 * @param {string} datetimeLocal - The datetime-local string to parse.
 * @returns {Date} The parsed date object.
 */
function parseDatetimeLocal(datetimeLocal) {
    return new Date(datetimeLocal);
}

/**
 * Parses a date string (YYYY-MM-DD) into a date object.
 * @param {string} dateString - The date string to parse.
 * @returns {Date} The parsed date object.
 */
function parseDate(dateString) {
    var [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
}

/**
 * Parses a year string (YYYY) into a date object.
 * @param {string} yearString - The year string to parse.
 * @returns {Date} The parsed date object.
 */
function parseYear(yearString) {
    return new Date(yearString);
}

/**
 * Parses a month string (YYYY-MM) into a date object.
 * @param {string} monthString - The month string to parse.
 * @returns {Date} The parsed date object.
 */
function parseMonth(monthString) {
    var [year, month] = monthString.split("-").map(Number);
    return new Date(year, month - 1);
}

/**
 * Parses a time string (HH:MM) into a date object.
 * @param {string} timeString - The time string to parse.
 * @returns {Date} The parsed date object.
 */
function parseTime(timeString) {
    var [hours, minutes] = timeString.split(":").map(Number);
    var date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

/**
 * Parses an ISO 8601 week string into a date object.
 * @param {string} weekStr - The ISO 8601 week string to parse (YYYY-WWW).
 * @returns {Date} The parsed date object representing the start of the week.
 * @throws {Error} Throws an error if the week format is invalid or the year/week numbers are invalid.
 */
function parseWeek(weekStr) {
    let parts = weekStr.split("-W");
    if (parts.length !== 2 || parts[1].length !== 2) {
        throw new Error("Invalid week format. Should be in YYYY-WWW format.");
    }
    let year = parseInt(parts[0], 10);
    let week = parseInt(parts[1], 10);
    if (isNaN(year) || isNaN(week) || week < 1 || week > 53) {
        throw new Error("Invalid year or week number.");
    }
    let jan4 = new Date(year, 0, 4);
    let startOfWeek = new Date(jan4.setDate(jan4.getDate() - ((jan4.getDay() + 6) % 7) + (week - 1) * 7));
    return startOfWeek;
}

/* Utility Functions */

/**
 * Checks if a value is defined (not undefined and not null).
 * @param {*} value - The value to check.
 * @returns {boolean} Returns true if the value is defined, otherwise false.
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}

/**
 * Creates a queue mechanism using Promises, allowing synchronous execution of async tasks.
 * @returns {Function} A function that accepts an async callback and returns a Promise.
 */
const createQueue = () => {
    let pending = Promise.resolve();

    /**
     * Executes an async callback function synchronously.
     * @param {Function} callback - The async callback function to execute.
     * @returns {Promise<any>} A Promise that resolves with the result of the callback.
     */
    const execute = async (callback = () => {}) => {
        let result;
        try {
            await pending;
        } finally {
            result = callback();
        }
        return result;
    };

    return (callback = () => {}) => (pending = execute(callback));
};

/* Date Prototype Methods */

/**
 * Sets the date to the first day of a specific ISO 8601 week.
 * @param {number} week - The ISO 8601 week number (between 1 and 53).
 * @returns {Date} The modified Date object.
 * @throws {Error} Throws an error if the week number is invalid (not a number, less than 1, or greater than 53).
 */
Date.prototype.setWeek = function (week) {
    if (typeof week !== "number" || week < 1 || week > 53) {
        throw new Error("Invalid week number. Week number should be between 1 and 53.");
    }
    this.setDate(1);
    this.setMonth(0);
    this.setDate(1 + (week - 1) * 7);
    return this;
};

/**
 * Gets the ISO 8601 week number of the date.
 * @returns {number} The ISO 8601 week number (between 1 and 53).
 */
Date.prototype.getWeek = function () {
    let tempDate = new Date(this.getTime());
    tempDate.setHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));
    let week1 = new Date(tempDate.getFullYear(), 0, 4);
    return 1 + Math.round(((tempDate - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};

export { toPascalCase, toCamelCase, toSnakeCase, toKebabCase, toFlatCase, toUpperFlatCase, toPascalSnakeCase, toCamelSnakeCase, toScreamingSnakeCase, toTrainCase, toCobolCase, toTitleCase, stringifyDatetimeLocal, stringifyDate, stringifyYear, stringifyMonth, stringifyTime, stringifyWeek, parseDatetimeLocal, parseDate, parseYear, parseMonth, parseTime, parseWeek, isDefined, createQueue };
