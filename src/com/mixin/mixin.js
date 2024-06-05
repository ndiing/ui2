import { html } from "lit";
import { choose } from "lit/directives/choose.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 */
function toPascalCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toCamelCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => ($0 == 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toUpperFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toPascalSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toCamelSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + ($0 == 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toScreamingSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toTrainCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "-" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toCobolCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "-" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

/**
 *
 */
function queue() {
    let pending = Promise.resolve();

    /**
     *
     */
    async function execute(callback) {
        try {
            await pending;
        } finally {
            return callback();
        }
    }

    /**
     *
     */
    return function enqueue(callback) {
        return (pending = execute(callback));
    };
}

/**
 *
 */
Date.prototype.getWeek = function () {
    let date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    let week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};

/**
 *
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
 *
 */
function isDefined(value) {
    return value !== null && value !== undefined;
}

export {  toPascalCase, toCamelCase, toSnakeCase, toKebabCase, toFlatCase, toUpperFlatCase, toPascalSnakeCase, toCamelSnakeCase, toScreamingSnakeCase, toTrainCase, toCobolCase, toTitleCase, queue, isDefined };
