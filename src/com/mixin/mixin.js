// PascalCase

function toPascalCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// camelCase

function toCamelCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => ($0 == 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// snake_case

function toSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// kebab-case

function toKebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// flatcase

function toFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// UPPERFLATCASE

function toUpperFlatCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// Pascal_Snake_Case

function toPascalSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// camel_Snake_Case

function toCamelSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + ($0 == 0 ? $2.toLowerCase() : $2.toUpperCase()))
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// SCREAMING_SNAKE_CASE

function toScreamingSnakeCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "_" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "_" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// Train-Case

function toTrainCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "-" + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "-" + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// COBOL-CASE

function toCobolCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + "-" + $2)
        .toUpperCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => "-" + $2)
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}
// Title Case

function toTitleCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, ($, $1, $2, $0) => $1 + " " + $2)
        .toLowerCase()
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z])/g, ($, $1, $2, $0) => " " + $2.toUpperCase())
        .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
}

// const data = [
//     //
//     "PascalCase",
//     "camelCase",
//     "snake_case",
//     "kebab-case",
//     "flatcase",
//     "UPPERFLATCASE",
//     "Pascal_Snake_Case",
//     "camel_Snake_Case",
//     "SCREAMING_SNAKE_CASE",
//     "Train-Case",
//     "COBOL-CASE",
// ];
// console.log('PascalCase',JSON.stringify(data.map(toPascalCase),null,4))
// console.log('camelCase',JSON.stringify(data.map(toCamelCase),null,4))
// console.log('snake_case',JSON.stringify(data.map(toSnakeCase),null,4))
// console.log('kebab-case',JSON.stringify(data.map(toKebabCase),null,4))
// console.log('flatcase',JSON.stringify(data.map(toFlatCase),null,4))
// console.log('UPPERFLATCASE',JSON.stringify(data.map(toUpperFlatCase),null,4))
// console.log('Pascal_Snake_Case',JSON.stringify(data.map(toPascalSnakeCase),null,4))
// console.log('camel_Snake_Case',JSON.stringify(data.map(toCamelSnakeCase),null,4))
// console.log('SCREAMING_SNAKE_CASE',JSON.stringify(data.map(toScreamingSnakeCase),null,4))
// console.log('Train-Case',JSON.stringify(data.map(toTrainCase),null,4))
// console.log('COBOL-CASE',JSON.stringify(data.map(toCobolCase),null,4))

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

// const task = queue();

Date.prototype.getWeek = function () {
    // Create a copy of the current date object
    let date = new Date(this.getTime());

    // Set the hours to 0, minutes to 0, seconds to 0, and milliseconds to 0
    date.setHours(0, 0, 0, 0);

    // Thursday in current week decides the year
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));

    // January 4 is always in week 1
    let week1 = new Date(date.getFullYear(), 0, 4);

    // Adjust to Thursday in week 1 and count the number of weeks from week1 to date
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
};

Date.prototype.setWeek = function (week, year) {
    // Set the date to January 1st of the specified year
    let date = new Date(year, 0, 1);

    // Find the nearest Thursday (the day of the first week of the year)
    let dayOfWeek = date.getDay();
    let dayAdjustment = dayOfWeek <= 4 ? dayOfWeek - 1 : dayOfWeek - 8;

    // Adjust the date to the Thursday of the first week
    date.setDate(date.getDate() - dayAdjustment + 3);

    // Set the date to the Thursday of the specified week
    date.setDate(date.getDate() + (week - 1) * 7);

    // Adjust back to the start of the week (Monday)
    date.setDate(date.getDate() - ((date.getDay() + 6) % 7));

    // Update the original date object
    this.setTime(date.getTime());
    return this; // Enable method chaining
};

// // Example usage:
// let myDate = new Date();
// myDate.setWeek(20, 2023);
// console.log(myDate); // Outputs the date corresponding to the 20th week of 2023

function isDefined(value){
    return value!==null&&value!==undefined
}

// console.log(isDefined())
// console.log(isDefined(null))
// console.log(isDefined(''))

export {
    //
    toPascalCase,
    toCamelCase,
    toSnakeCase,
    toKebabCase,
    toFlatCase,
    toUpperFlatCase,
    toPascalSnakeCase,
    toCamelSnakeCase,
    toScreamingSnakeCase,
    toTrainCase,
    toCobolCase,
    toTitleCase,
    queue,
    isDefined,
};
