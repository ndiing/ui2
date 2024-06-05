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

function template(item) {
    return choose(
        item.tag,
        [
            [
                "md-badge",
                () => html`
                    <md-badge
                        .label="${ifDefined(item.label)}"
                        .max="${ifDefined(item.max)}"
                    >
                    </md-badge>
                `,
            ],
            [
                "md-bottom-app-bar",
                () => html`
                    <md-bottom-app-bar
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                        .fab="${ifDefined(item.fab)}"
                    >
                    </md-bottom-app-bar>
                `,
            ],
            [
                "md-bottom-sheet",
                () => html`
                    <md-bottom-sheet
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-bottom-sheet>
                `,
            ],
            [
                "md-button",
                () => html`
                    <md-button
                        .icon="${ifDefined(item.icon)}"
                        .label="${ifDefined(item.label)}"
                        .ui="${ifDefined(item.ui)}"
                        .type="${ifDefined(item.type)}"
                        .selected="${ifDefined(item.selected)}"
                    >
                    </md-button>
                `,
            ],
            [
                "md-card",
                () => html`
                    <md-card
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .image="${ifDefined(item.image)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-card>
                `,
            ],
            [
                "md-checkbox",
                () => html`
                    <md-checkbox
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .name="${ifDefined(item.name)}"
                        .required="${ifDefined(item.required)}"
                        .type="${ifDefined(item.type)}"
                        .value="${ifDefined(item.value)}"
                        .checked="${ifDefined(item.checked)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .defaultChecked="${ifDefined(item.defaultChecked)}"
                        .indeterminate="${ifDefined(item.indeterminate)}"
                        .defaultIndeterminate="${ifDefined(item.defaultIndeterminate)}"
                    >
                    </md-checkbox>
                `,
            ],
            [
                "md-chip",
                () => html`
                    <md-chip
                        .avatar="${ifDefined(item.avatar)}"
                        .icon="${ifDefined(item.icon)}"
                        .label="${ifDefined(item.label)}"
                        .action="${ifDefined(item.action)}"
                        .routerLink="${ifDefined(item.routerLink)}"
                        .selected="${ifDefined(item.selected)}"
                    >
                    </md-chip>
                `,
            ],
            [
                "md-chips",
                () => html`
                    <md-chips
                        .ui="${ifDefined(item.ui)}"
                        .list="${ifDefined(item.list)}"
                        .rangeSelection="${ifDefined(item.rangeSelection)}"
                        .multiSelection="${ifDefined(item.multiSelection)}"
                        .singleSelection="${ifDefined(item.singleSelection)}"
                        .allSelection="${ifDefined(item.allSelection)}"
                    >
                    </md-chips>
                `,
            ],
            [
                "md-color-field",
                () => html`
                    <md-color-field
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .list="${ifDefined(item.list)}"
                        .name="${ifDefined(item.name)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-color-field>
                `,
            ],
            [
                "md-color-picker",
                () => html`
                    <md-color-picker
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                        .index="${ifDefined(item.index)}"
                        .value="${ifDefined(item.value)}"
                    >
                    </md-color-picker>
                `,
            ],
            ["md-data-table-native-column-cell", () => html` <md-data-table-native-column-cell> </md-data-table-native-column-cell> `],
            ["md-data-table-native-row", () => html` <md-data-table-native-row> </md-data-table-native-row> `],
            ["md-data-table-native", () => html` <md-data-table-native> </md-data-table-native> `],
            [
                "md-data-table-item",
                () => html`
                    <md-data-table-item
                        .avatar="${ifDefined(item.avatar)}"
                        .thumbnail="${ifDefined(item.thumbnail)}"
                        .video="${ifDefined(item.video)}"
                        .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                        .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                        .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                        .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                        .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                        .text="${ifDefined(item.text)}"
                        .badge="${ifDefined(item.badge)}"
                        .selected="${ifDefined(item.selected)}"
                        .indeterminate="${ifDefined(item.indeterminate)}"
                        .routerLink="${ifDefined(item.routerLink)}"
                        .align="${ifDefined(item.align)}"
                        .sortable="${ifDefined(item.sortable)}"
                        .sortableIcon="${ifDefined(item.sortableIcon)}"
                        .actions="${ifDefined(item.actions)}"
                    >
                    </md-data-table-item>
                `,
            ],
            [
                "md-data-table",
                () => html`
                    <md-data-table
                        .columns="${ifDefined(item.columns)}"
                        .rows="${ifDefined(item.rows)}"
                        .rangeSelection="${ifDefined(item.rangeSelection)}"
                        .multiSelection="${ifDefined(item.multiSelection)}"
                        .singleSelection="${ifDefined(item.singleSelection)}"
                        .allSelection="${ifDefined(item.allSelection)}"
                        .checkbox="${ifDefined(item.checkbox)}"
                    >
                    </md-data-table>
                `,
            ],
            [
                "md-date-field",
                () => html`
                    <md-date-field
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .list="${ifDefined(item.list)}"
                        .name="${ifDefined(item.name)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .required="${ifDefined(item.required)}"
                        .type="${ifDefined(item.type)}"
                        .value="${ifDefined(item.value)}"
                        .max="${ifDefined(item.max)}"
                        .min="${ifDefined(item.min)}"
                        .step="${ifDefined(item.step)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-date-field>
                `,
            ],
            [
                "md-date-picker",
                () => html`
                    <md-date-picker
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                        .index="${ifDefined(item.index)}"
                        .value="${ifDefined(item.value)}"
                    >
                    </md-date-picker>
                `,
            ],
            [
                "md-datetime-field",
                () => html`
                    <md-datetime-field
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .list="${ifDefined(item.list)}"
                        .name="${ifDefined(item.name)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .required="${ifDefined(item.required)}"
                        .type="${ifDefined(item.type)}"
                        .value="${ifDefined(item.value)}"
                        .max="${ifDefined(item.max)}"
                        .min="${ifDefined(item.min)}"
                        .step="${ifDefined(item.step)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-datetime-field>
                `,
            ],
            [
                "md-datetime-picker",
                () => html`
                    <md-datetime-picker
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                        .index="${ifDefined(item.index)}"
                        .value="${ifDefined(item.value)}"
                    >
                    </md-datetime-picker>
                `,
            ],
            [
                "md-dialog",
                () => html`
                    <md-dialog
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-dialog>
                `,
            ],
            [
                "md-email-field",
                () => html`
                    <md-email-field
                        .name="${ifDefined(item.name)}"
                        .placeholder="${ifDefined(item.placeholder)}"
                        .maxlength="${ifDefined(item.maxlength)}"
                        .minlength="${ifDefined(item.minlength)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .pattern="${ifDefined(item.pattern)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .list="${ifDefined(item.list)}"
                        .multiple="${ifDefined(item.multiple)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-email-field>
                `,
            ],
            [
                "md-fab",
                () => html`
                    <md-fab
                        .icon="${ifDefined(item.icon)}"
                        .label="${ifDefined(item.label)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-fab>
                `,
            ],
            [
                "md-file-field",
                () => html`
                    <md-file-field
                        .name="${ifDefined(item.name)}"
                        .accept="${ifDefined(item.accept)}"
                        .multiple="${ifDefined(item.multiple)}"
                        .capture="${ifDefined(item.capture)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .list="${ifDefined(item.list)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-file-field>
                `,
            ],
            [
                "md-form",
                () => html`
                    <md-form
                        .action="${ifDefined(item.action)}"
                        .method="${ifDefined(item.method)}"
                        .enctype="${ifDefined(item.enctype)}"
                        .target="${ifDefined(item.target)}"
                        .name="${ifDefined(item.name)}"
                        .novalidate="${ifDefined(item.novalidate)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                    >
                    </md-form>
                `,
            ],
            ["md-icon", () => html` <md-icon> </md-icon> `],
            [
                "md-icon-button",
                () => html`
                    <md-icon-button
                        .icon="${ifDefined(item.icon)}"
                        .ui="${ifDefined(item.ui)}"
                        .toggle="${ifDefined(item.toggle)}"
                        .selected="${ifDefined(item.selected)}"
                    >
                    </md-icon-button>
                `,
            ],
            [
                "md-image",
                () => html`
                    <md-image
                        .src="${ifDefined(item.src)}"
                        .alt="${ifDefined(item.alt)}"
                        .ratio="${ifDefined(item.ratio)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-image>
                `,
            ],
            [
                "md-list-item",
                () => html`
                    <md-list-item
                        .avatar="${ifDefined(item.avatar)}"
                        .thumbnail="${ifDefined(item.thumbnail)}"
                        .video="${ifDefined(item.video)}"
                        .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                        .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                        .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                        .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                        .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                        .text="${ifDefined(item.text)}"
                        .badge="${ifDefined(item.badge)}"
                        .selected="${ifDefined(item.selected)}"
                        .routerLink="${ifDefined(item.routerLink)}"
                    >
                    </md-list-item>
                `,
            ],
            ["md-list-row", () => html` <md-list-row> </md-list-row> `],
            [
                "md-list",
                () => html`
                    <md-list
                        .list="${ifDefined(item.list)}"
                        .rangeSelection="${ifDefined(item.rangeSelection)}"
                        .multiSelection="${ifDefined(item.multiSelection)}"
                        .singleSelection="${ifDefined(item.singleSelection)}"
                        .allSelection="${ifDefined(item.allSelection)}"
                    >
                    </md-list>
                `,
            ],
            [
                "md-menu",
                () => html`
                    <md-menu
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-menu>
                `,
            ],
            [
                "md-month-field",
                () => html`
                    <md-month-field
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .list="${ifDefined(item.list)}"
                        .name="${ifDefined(item.name)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .required="${ifDefined(item.required)}"
                        .type="${ifDefined(item.type)}"
                        .value="${ifDefined(item.value)}"
                        .max="${ifDefined(item.max)}"
                        .min="${ifDefined(item.min)}"
                        .step="${ifDefined(item.step)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-month-field>
                `,
            ],
            [
                "md-month-picker",
                () => html`
                    <md-month-picker
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                        .index="${ifDefined(item.index)}"
                        .value="${ifDefined(item.value)}"
                    >
                    </md-month-picker>
                `,
            ],
            [
                "md-navigation-bar",
                () => html`
                    <md-navigation-bar
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-navigation-bar>
                `,
            ],
            [
                "md-navigation-drawer",
                () => html`
                    <md-navigation-drawer
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-navigation-drawer>
                `,
            ],
            [
                "md-navigation-rail",
                () => html`
                    <md-navigation-rail
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-navigation-rail>
                `,
            ],
            [
                "md-nested-list-item",
                () => html`
                    <md-nested-list-item
                        .label="${ifDefined(item.label)}"
                        .selected="${ifDefined(item.selected)}"
                        .routerLink="${ifDefined(item.routerLink)}"
                        .indent="${ifDefined(item.indent)}"
                        .isNode="${ifDefined(item.isNode)}"
                        .ui="${ifDefined(item.ui)}"
                        .expanded="${ifDefined(item.expanded)}"
                        .activated="${ifDefined(item.activated)}"
                        .isParent="${ifDefined(item.isParent)}"
                        .hasLevel="${ifDefined(item.hasLevel)}"
                        .nodeIcons="${ifDefined(item.nodeIcons)}"
                        .leafIcon="${ifDefined(item.leafIcon)}"
                    >
                    </md-nested-list-item>
                `,
            ],
            ["md-nested-list-row", () => html` <md-nested-list-row> </md-nested-list-row> `],
            [
                "md-nested-list",
                () => html`
                    <md-nested-list
                        .list="${ifDefined(item.list)}"
                        .rangeSelection="${ifDefined(item.rangeSelection)}"
                        .multiSelection="${ifDefined(item.multiSelection)}"
                        .singleSelection="${ifDefined(item.singleSelection)}"
                        .allSelection="${ifDefined(item.allSelection)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-nested-list>
                `,
            ],
            [
                "md-number-field",
                () => html`
                    <md-number-field
                        .name="${ifDefined(item.name)}"
                        .placeholder="${ifDefined(item.placeholder)}"
                        .min="${ifDefined(item.min)}"
                        .max="${ifDefined(item.max)}"
                        .step="${ifDefined(item.step)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .list="${ifDefined(item.list)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-number-field>
                `,
            ],
            [
                "md-password-field",
                () => html`
                    <md-password-field
                        .type="${ifDefined(item.type)}"
                        .name="${ifDefined(item.name)}"
                        .placeholder="${ifDefined(item.placeholder)}"
                        .maxlength="${ifDefined(item.maxlength)}"
                        .minlength="${ifDefined(item.minlength)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .pattern="${ifDefined(item.pattern)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-password-field>
                `,
            ],
            [
                "md-progress-indicator",
                () => html`
                    <md-progress-indicator
                        .max="${ifDefined(item.max)}"
                        .value="${ifDefined(item.value)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-progress-indicator>
                `,
            ],
            [
                "md-radio-button",
                () => html`
                    <md-radio-button
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .name="${ifDefined(item.name)}"
                        .required="${ifDefined(item.required)}"
                        .type="${ifDefined(item.type)}"
                        .value="${ifDefined(item.value)}"
                        .checked="${ifDefined(item.checked)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .defaultChecked="${ifDefined(item.defaultChecked)}"
                        .indeterminate="${ifDefined(item.indeterminate)}"
                        .defaultIndeterminate="${ifDefined(item.defaultIndeterminate)}"
                    >
                    </md-radio-button>
                `,
            ],
            [
                "md-search-field",
                () => html`
                    <md-search-field
                        .name="${ifDefined(item.name)}"
                        .placeholder="${ifDefined(item.placeholder)}"
                        .maxlength="${ifDefined(item.maxlength)}"
                        .minlength="${ifDefined(item.minlength)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .pattern="${ifDefined(item.pattern)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .list="${ifDefined(item.list)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-search-field>
                `,
            ],
            [
                "md-segmented-button",
                () => html`
                    <md-segmented-button
                        .buttons="${ifDefined(item.buttons)}"
                        .rangeSelection="${ifDefined(item.rangeSelection)}"
                        .multiSelection="${ifDefined(item.multiSelection)}"
                        .singleSelection="${ifDefined(item.singleSelection)}"
                        .allSelection="${ifDefined(item.allSelection)}"
                    >
                    </md-segmented-button>
                `,
            ],
            [
                "md-select-field",
                () => html`
                    <md-select-field
                        .name="${ifDefined(item.name)}"
                        .size="${ifDefined(item.size)}"
                        .multiple="${ifDefined(item.multiple)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .options="${ifDefined(item.options)}"
                        .selectedOptions="${ifDefined(item.selectedOptions)}"
                        .selectedIndex="${ifDefined(item.selectedIndex)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-select-field>
                `,
            ],
            [
                "md-side-sheet",
                () => html`
                    <md-side-sheet
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-side-sheet>
                `,
            ],
            [
                "md-slider",
                () => html`
                    <md-slider
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .list="${ifDefined(item.list)}"
                        .name="${ifDefined(item.name)}"
                        .type="${ifDefined(item.type)}"
                        .max="${ifDefined(item.max)}"
                        .min="${ifDefined(item.min)}"
                        .step="${ifDefined(item.step)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .convertLabel="${ifDefined(item.convertLabel)}"
                    >
                    </md-slider>
                `,
            ],
            [
                "md-snackbar",
                () => html`
                    <md-snackbar
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-snackbar>
                `,
            ],
            [
                "md-switch",
                () => html`
                    <md-switch
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .name="${ifDefined(item.name)}"
                        .required="${ifDefined(item.required)}"
                        .type="${ifDefined(item.type)}"
                        .value="${ifDefined(item.value)}"
                        .checked="${ifDefined(item.checked)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .defaultChecked="${ifDefined(item.defaultChecked)}"
                        .indeterminate="${ifDefined(item.indeterminate)}"
                        .defaultIndeterminate="${ifDefined(item.defaultIndeterminate)}"
                        .icons="${ifDefined(item.icons)}"
                    >
                    </md-switch>
                `,
            ],
            ["md-tabs", () => html` <md-tabs .ui="${ifDefined(item.ui)}"> </md-tabs> `],
            [
                "md-tel-field",
                () => html`
                    <md-tel-field
                        .name="${ifDefined(item.name)}"
                        .placeholder="${ifDefined(item.placeholder)}"
                        .maxlength="${ifDefined(item.maxlength)}"
                        .minlength="${ifDefined(item.minlength)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .pattern="${ifDefined(item.pattern)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .list="${ifDefined(item.list)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-tel-field>
                `,
            ],
            [
                "md-text-field",
                () => html`
                    <md-text-field
                        .name="${ifDefined(item.name)}"
                        .placeholder="${ifDefined(item.placeholder)}"
                        .size="${ifDefined(item.size)}"
                        .maxlength="${ifDefined(item.maxlength)}"
                        .minlength="${ifDefined(item.minlength)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .pattern="${ifDefined(item.pattern)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .list="${ifDefined(item.list)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-text-field>
                `,
            ],
            [
                "md-textarea-field",
                () => html`
                    <md-textarea-field
                        .name="${ifDefined(item.name)}"
                        .placeholder="${ifDefined(item.placeholder)}"
                        .cols="${ifDefined(item.cols)}"
                        .rows="${ifDefined(item.rows)}"
                        .maxlength="${ifDefined(item.maxlength)}"
                        .minlength="${ifDefined(item.minlength)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-textarea-field>
                `,
            ],
            [
                "md-time-field",
                () => html`
                    <md-time-field
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .list="${ifDefined(item.list)}"
                        .name="${ifDefined(item.name)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .required="${ifDefined(item.required)}"
                        .type="${ifDefined(item.type)}"
                        .value="${ifDefined(item.value)}"
                        .max="${ifDefined(item.max)}"
                        .min="${ifDefined(item.min)}"
                        .step="${ifDefined(item.step)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-time-field>
                `,
            ],
            [
                "md-time-picker",
                () => html`
                    <md-time-picker
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                        .index="${ifDefined(item.index)}"
                        .value="${ifDefined(item.value)}"
                    >
                    </md-time-picker>
                `,
            ],
            [
                "md-tooltip",
                () => html`
                    <md-tooltip
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-tooltip>
                `,
            ],
            [
                "md-top-app-bar",
                () => html`
                    <md-top-app-bar
                        .leadingActions="${ifDefined(item.leadingActions)}"
                        .label="${ifDefined(item.label)}"
                        .subLabel="${ifDefined(item.subLabel)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .buttons="${ifDefined(item.buttons)}"
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                    >
                    </md-top-app-bar>
                `,
            ],
            [
                "md-url-field",
                () => html`
                    <md-url-field
                        .name="${ifDefined(item.name)}"
                        .placeholder="${ifDefined(item.placeholder)}"
                        .maxlength="${ifDefined(item.maxlength)}"
                        .minlength="${ifDefined(item.minlength)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .required="${ifDefined(item.required)}"
                        .pattern="${ifDefined(item.pattern)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .autofocus="${ifDefined(item.autofocus)}"
                        .list="${ifDefined(item.list)}"
                        .spellcheck="${ifDefined(item.spellcheck)}"
                        .value="${ifDefined(item.value)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-url-field>
                `,
            ],
            [
                "md-week-field",
                () => html`
                    <md-week-field
                        .autocapitalize="${ifDefined(item.autocapitalize)}"
                        .autocomplete="${ifDefined(item.autocomplete)}"
                        .disabled="${ifDefined(item.disabled)}"
                        .form="${ifDefined(item.form)}"
                        .list="${ifDefined(item.list)}"
                        .name="${ifDefined(item.name)}"
                        .readonly="${ifDefined(item.readonly)}"
                        .required="${ifDefined(item.required)}"
                        .type="${ifDefined(item.type)}"
                        .value="${ifDefined(item.value)}"
                        .max="${ifDefined(item.max)}"
                        .min="${ifDefined(item.min)}"
                        .step="${ifDefined(item.step)}"
                        .defaultValue="${ifDefined(item.defaultValue)}"
                        .label="${ifDefined(item.label)}"
                        .leadingIcon="${ifDefined(item.leadingIcon)}"
                        .leadingMeta="${ifDefined(item.leadingMeta)}"
                        .trailingMeta="${ifDefined(item.trailingMeta)}"
                        .trailingActions="${ifDefined(item.trailingActions)}"
                        .trailingIcon="${ifDefined(item.trailingIcon)}"
                        .text="${ifDefined(item.text)}"
                        .focused="${ifDefined(item.focused)}"
                        .populated="${ifDefined(item.populated)}"
                        .invalid="${ifDefined(item.invalid)}"
                        .validationMessage="${ifDefined(item.validationMessage)}"
                        .ui="${ifDefined(item.ui)}"
                    >
                    </md-week-field>
                `,
            ],
            [
                "md-week-picker",
                () => html`
                    <md-week-picker
                        .ui="${ifDefined(item.ui)}"
                        .open="${ifDefined(item.open)}"
                        .index="${ifDefined(item.index)}"
                        .value="${ifDefined(item.value)}"
                    >
                    </md-week-picker>
                `,
            ],
        ],
        () => html``,
    );
}

export { template, toPascalCase, toCamelCase, toSnakeCase, toKebabCase, toFlatCase, toUpperFlatCase, toPascalSnakeCase, toCamelSnakeCase, toScreamingSnakeCase, toTrainCase, toCobolCase, toTitleCase, queue, isDefined };
