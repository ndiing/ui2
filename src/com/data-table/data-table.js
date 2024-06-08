import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
import { notNull } from "../mixin/mixin";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { MDVirtualScrollModule } from "../virtual-scroll/virtual-scroll";
import { MDGestureModule } from "../gesture/gesture";
import { MDStoreModule } from "../store/store";
import { MDRouterModule } from "../router/router";
/**
 * MDDataTableNativeColumnCellComponent class extends HTMLTableCellElement
 * to manage sticky columns in a data table.
 *
 * @extends {HTMLTableCellElement}
 */
class MDDataTableNativeColumnCellComponent extends HTMLTableCellElement {
    /**
     * Constructor for MDDataTableNativeColumnCellComponent.
     * Binds the callback method and initializes a ResizeObserver.
     */
    constructor() {
        super();

        // Bind the callback method to maintain context
        this.callback = this.callback.bind(this);

        // Initialize ResizeObserver with the callback
        this.resizeObserver = new ResizeObserver(this.callback);
    }

    /**
     * Callback function to handle resize events.
     * Adjusts the position of sticky columns.
     *
     * @param {ResizeObserverEntry[]} entries - The resize observer entries.
     */
    callback(entries) {
        window.requestAnimationFrame(() => {
            // Handle left-sticky columns
            if (this.classList.contains("md-data-table__sticky--left")) {
                let prev = this.previousElementSibling;
                let left = 0;

                // Calculate the total width of all previous sticky columns
                while (prev) {
                    if (prev.classList.contains("md-data-table__sticky--left")) {
                        left += prev.getBoundingClientRect().width;
                    }
                    prev = prev.previousElementSibling;
                }
                // Set the left position of the current column
                this.style.setProperty("left", left + "px");

                // const index = Array.from(this.parentElement.children).indexOf(this);
                // this.closest("table")
                //     .querySelectorAll(`td:nth-child(${index + 1})`)
                //     .forEach((td) => {
                //         td.classList.add("md-data-table__sticky", "md-data-table__sticky--row", "md-data-table__sticky--left");
                //         td.style.setProperty("left", left + "px");
                //     });
            }
            // Handle right-sticky columns
            else if (this.classList.contains("md-data-table__sticky--right")) {
                let next = this.nextElementSibling;
                let right = 0;

                // Calculate the total width of all next sticky columns
                while (next) {
                    if (next.classList.contains("md-data-table__sticky--right")) {
                        right += next.getBoundingClientRect().width;
                    }
                    next = next.nextElementSibling;
                }
                // Set the right position of the current column
                this.style.setProperty("right", right + "px");

                // const index = Array.from(this.parentElement.children).indexOf(this);
                // this.closest("table")
                //     .querySelectorAll(`td:nth-child(${index + 1})`)
                //     .forEach((td) => {
                //         td.classList.add("md-data-table__sticky", "md-data-table__sticky--row", "md-data-table__sticky--right");
                //         td.style.setProperty("right", right + "px");
                //     });
            }
        });
    }

    /**
     * Called when the element is inserted into the DOM.
     * Observes the element for resize events and initializes resizable features if needed.
     */
    connectedCallback() {
        // Observe the element for resize events
        this.resizeObserver.observe(this);

        // Initialize resizable and draggable features if the attribute is set
        if (this.hasAttribute("resizable") || this.hasAttribute("moveable")) {
            this.gesture = new MDGestureModule(this, {
                resize: ["e"],
                drag: ["x"],
                dragAfterPress: true,
            });
        }
    }

    /**
     * Called when the element is removed from the DOM.
     * Disconnects the resize observer and destroys gesture features if they exist.
     */
    disconnectedCallback() {
        // Disconnect the resize observer
        this.resizeObserver.disconnect();

        // Destroy the gesture features if they exist
        if (this.gesture) {
            this.gesture.destroy();
        }
    }
}

// Define the custom element with the specified options
customElements.define("md-data-table-native-column-cell", MDDataTableNativeColumnCellComponent, { extends: "th" });
/**
 * MDDataTableNativeRowCellComponent class extends HTMLTableCellElement
 * to manage sticky cells in a data table row.
 *
 * @extends {HTMLTableCellElement}
 */
class MDDataTableNativeRowCellComponent extends HTMLTableCellElement {
    /**
     * Constructor for MDDataTableNativeRowCellComponent.
     * Binds the callback method and initializes a ResizeObserver.
     */
    constructor() {
        super();

        // Bind the callback method to maintain context
        this.callback = this.callback.bind(this);

        // Initialize ResizeObserver with the callback
        this.resizeObserver = new ResizeObserver(this.callback);
    }

    /**
     * Callback function to handle resize events.
     * Adjusts the position of sticky cells.
     *
     * @param {ResizeObserverEntry[]} entries - The resize observer entries.
     */
    callback(entries) {
        window.requestAnimationFrame(() => {
            // Handle left-sticky cells
            if (this.classList.contains("md-data-table__sticky--left")) {
                let prev = this.previousElementSibling;
                let left = 0;

                // Calculate the total width of all previous sticky cells
                while (prev) {
                    if (prev.classList.contains("md-data-table__sticky--left")) {
                        left += prev.getBoundingClientRect().width;
                    }
                    prev = prev.previousElementSibling;
                }
                // Set the left position of the current cell
                this.style.setProperty("left", left + "px");
            }
            // Handle right-sticky cells
            else if (this.classList.contains("md-data-table__sticky--right")) {
                let next = this.nextElementSibling;
                let right = 0;

                // Calculate the total width of all next sticky cells
                while (next) {
                    if (next.classList.contains("md-data-table__sticky--right")) {
                        right += next.getBoundingClientRect().width;
                    }
                    next = next.nextElementSibling;
                }
                // Set the right position of the current cell
                this.style.setProperty("right", right + "px");
            }
        });
    }

    /**
     * Called when the element is inserted into the DOM.
     * Observes the element for resize events.
     */
    connectedCallback() {
        // Observe the element for resize events
        this.resizeObserver.observe(this);
    }

    /**
     * Called when the element is removed from the DOM.
     * Disconnects the resize observer.
     */
    disconnectedCallback() {
        // Disconnect the resize observer
        this.resizeObserver.disconnect();
    }
}

// Define the custom element with the specified options
customElements.define("md-data-table-native-row-cell", MDDataTableNativeRowCellComponent, { extends: "td" });
/**
 * MDDataTableItemComponent class extends MDElement
 * to represent an item in a data table.
 *
 * @extends {MDElement}
 */
class MDDataTableItemComponent extends MDElement {
    /**
     * Define the properties of the component.
     *
     * @property {String} avatar - The avatar image source URL.
     * @property {String} thumbnail - The thumbnail image source URL.
     * @property {String} video - The video source URL.
     * @property {Object} leadingCheckbox - The leading checkbox configuration.
     * @property {Object} leadingRadioButton - The leading radio button configuration.
     * @property {Object} leadingSwitch - The leading switch configuration.
     * @property {String} leadingIcon - The leading icon.
     * @property {String} label - The primary label text.
     * @property {String} subLabel - The secondary label text.
     * @property {String} trailingIcon - The trailing icon.
     * @property {Object} trailingCheckbox - The trailing checkbox configuration.
     * @property {Object} trailingRadioButton - The trailing radio button configuration.
     * @property {Object} trailingSwitch - The trailing switch configuration.
     * @property {String} text - The additional text content.
     * @property {Object} badge - The badge configuration.
     * @property {Boolean} selected - The selected state of the item.
     * @property {String} routerLink - The router link URL.
     * @property {Boolean} indeterminate - The indeterminate state.
     * @property {Boolean} sortable - The sortable state.
     * @property {String} sortableIcon - The sortable icon.
     * @property {Array} trailingActions - The trailing actions array.
     *
     * @returns {Object} The properties of the component.
     */
    static get properties() {
        return {
            avatar: { type: String },
            thumbnail: { type: String },
            video: { type: String },
            leadingCheckbox: { type: Object },
            leadingRadioButton: { type: Object },
            leadingSwitch: { type: Object },
            leadingIcon: { type: String },
            label: { type: String },
            subLabel: { type: String },
            trailingIcon: { type: String },
            trailingCheckbox: { type: Object },
            trailingRadioButton: { type: Object },
            trailingSwitch: { type: Object },
            text: { type: String },
            badge: { type: Object },
            selected: { type: Boolean, reflect: true },
            routerLink: { type: String, reflect: true },
            indeterminate: { type: Boolean },
            sortable: { type: Boolean },
            sortableIcon: { type: String },
            trailingActions: { type: Array },
        };
    }

    /**
     * Constructor for MDDataTableItemComponent.
     */
    constructor() {
        super();
    }

    /**
     * Get the secondary label element.
     * @returns {Element} The secondary label element.
     */
    get labelSecondary() {
        return this.querySelector(".md-data-table__label-secondary");
    }

    /**
     * Render the component's HTML template.
     * @returns {TemplateResult} The rendered template.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.avatar ? html`<md-image class="md-data-table__avatar" .src="${this.avatar}" .ui="${"rounded"}"></md-image>` : nothing}
            ${this.thumbnail ? html`<md-image class="md-data-table__thumbnail" .src="${this.thumbnail}"></md-image>` : nothing}
            ${this.video ? html`<md-image class="md-data-table__video" .src="${this.video}" .ratio="${4 / 3}"></md-image>` : nothing}

            ${this.leadingCheckbox ? html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>` : nothing}
            ${this.leadingRadioButton ? html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>` : nothing}
            ${this.leadingSwitch ? html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>` : nothing}

            ${this.leadingIcon ? html`<md-icon class="md-data-table__icon">${this.leadingIcon}</md-icon>` : nothing}
            <!-- ${this.sortable ? html`<md-icon-button @click="${this.handleDataTableItemSortableClick}" class="md-data-table__sortable">${this.sortableIcon}</md-icon-button>` : nothing} -->

            ${notNull(this.label) || this.subLabel || this.badge ? html`
                <div class="md-data-table__label">
                    ${notNull(this.label) ? html`<div class="md-data-table__label-primary">${this.label}</div>` : nothing}
                    ${this.subLabel ? html`<div class="md-data-table__label-secondary">${this.subLabel}</div>` : nothing}
                    ${this.badge ? html`<md-badge class="md-data-table__badge" .label="${ifDefined(this.badge?.label ?? this.badge)}" .max="${ifDefined(this.badge.max)}"></md-badge>` : nothing}
                </div>
            ` : nothing}

            ${this.sortable ? html`<md-icon-button @click="${this.handleDataTableItemSortableClick}" class="md-data-table__sortable">${this.sortableIcon}</md-icon-button>` : nothing}
            ${this.trailingIcon ? html`<md-icon class="md-data-table__icon">${this.trailingIcon}</md-icon>` : nothing}

            ${this.trailingCheckbox ? html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>` : nothing}
            ${this.trailingRadioButton ? html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>` : nothing}
            ${this.trailingSwitch ? html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>` : nothing}

            ${this.text ? html`<div class="md-data-table__text">${this.text}</div>` : nothing}

            ${this.trailingActions?.length ? html`
                <div class="md-data-table__actions">
                    ${this.trailingActions.map(action => html`
                        <md-icon-button 
                            class="md-data-table__action"
                            .icon="${ifDefined(action?.icon)}"
                            @click="${this.handleDataTableItemActionClick}"
                        ></md-icon-button>
                    `)}
                </div>
            ` : nothing}
        `;
    }

    /**
     * Called when the element is inserted into the DOM.
     * Adds the item class and adjusts line count based on label height.
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-table__item");
        await this.updateComplete;

        // Adjust the item class based on the height of the secondary label
        if (this.labelSecondary) {
            if (this.labelSecondary.scrollHeight > this.labelSecondary.clientHeight) {
                this.classList.add("md-data-table__item--three-line");
            } else {
                this.classList.add("md-data-table__item--two-line");
            }
        }
    }

    /**
     * Called when the element is removed from the DOM.
     * Removes the item class.
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-table__item");
    }

    /**
     * Called when the element is first updated.
     * @param {Map} changedProperties - The changed properties.
     */
    firstUpdated(changedProperties) {}

    /**
     * Called when the element is updated.
     * Emits an event if the selected property changes.
     *
     * @param {Map} changedProperties - The changed properties.
     * @fires MDDataTableItemComponent#onDataTableItemSelected
     */
    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                /**
                 * Data table item selected event.
                 * @event MDDataTableItemComponent#onDataTableItemSelected
                 * @type {Object}
                 * @property {MDDataTableItemComponent} detail - The selected item component.
                 */
                this.emit("onDataTableItemSelected", this);
            }
        }
    }

    /**
     * Handle native input event for checkbox.
     * @param {Event} event - The event object.
     * @fires MDDataTableItemComponent#onDataTableItemCheckboxNativeInput
     */
    handleDataTableItemCheckboxNativeInput(event) {
        /**
         * Data table item checkbox native input event.
         * @event MDDataTableItemComponent#onDataTableItemCheckboxNativeInput
         * @type {Event}
         */
        this.emit("onDataTableItemCheckboxNativeInput", event);
    }

    /**
     * Handle native input event for radio button.
     * @param {Event} event - The event object.
     * @fires MDDataTableItemComponent#onDataTableItemRadioButtonNativeInput
     */
    handleDataTableItemRadioButtonNativeInput(event) {
        /**
         * Data table item radio button native input event.
         * @event MDDataTableItemComponent#onDataTableItemRadioButtonNativeInput
         * @type {Event}
         */
        this.emit("onDataTableItemRadioButtonNativeInput", event);
    }

    /**
     * Handle native input event for switch.
     * @param {Event} event - The event object.
     * @fires MDDataTableItemComponent#onDataTableItemSwitchNativeInput
     */
    handleDataTableItemSwitchNativeInput(event) {
        /**
         * Data table item switch native input event.
         * @event MDDataTableItemComponent#onDataTableItemSwitchNativeInput
         * @type {Event}
         */
        this.emit("onDataTableItemSwitchNativeInput", event);
    }

    /**
     * Handle click event for sortable button.
     * @param {Event} event - The event object.
     * @fires MDDataTableItemComponent#onDataTableItemSortableClick
     */
    handleDataTableItemSortableClick(event) {
        /**
         * Data table item sortable click event.
         * @event MDDataTableItemComponent#onDataTableItemSortableClick
         * @type {Event}
         */
        this.emit("onDataTableItemSortableClick", event);
    }

    /**
     * Handle click event for action button.
     * @param {Event} event - The event object.
     * @fires MDDataTableItemComponent#onDataTableItemActionClick
     */
    handleDataTableItemActionClick(event) {
        /**
         * Data table item action click event.
         * @event MDDataTableItemComponent#onDataTableItemActionClick
         * @type {Event}
         */
        this.emit("onDataTableItemActionClick", event);
    }
}

customElements.define("md-data-table-item", MDDataTableItemComponent);
/**
 * Represents a Material Design Data Table component with various selection options and rendering functionalities.
 * @fires MDDataTableComponent#onDataTableKeydown
 * @fires MDDataTableComponent#onDataTableNativeVirtualScroll
 * @fires MDDataTableComponent#onDataTabaleColumnCellResizeStart
 * @fires MDDataTableComponent#onDataTabaleColumnCellResize
 * @fires MDDataTableComponent#onDataTabaleColumnCellResizeEnd
 * @fires MDDataTableComponent#onDataTabaleColumnCellResizeDoubleTap
 * @fires MDDataTableComponent#onDataTabaleColumnCellDragStart
 * @fires MDDataTableComponent#onDataTabaleColumnCellDrag
 * @fires MDDataTableComponent#onDataTabaleColumnCellDragEnd
 * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerenter
 * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerleave
 * @fires MDDataTableComponent#onDataTableColumnCellSortableClick
 * @fires MDDataTableComponent#onDataTableItemClick
 * @extends {MDElement}
 */
class MDDataTableComponent extends MDElement {
    /**
     * Properties of the MDDataTableComponent.
     * @property {Array} columns - The columns of the data table.
     * @property {Array} rows - The rows of the data table.
     * @property {Array} summaries - The summaries of the data table.
     * @property {Boolean} rangeSelection - Enables range selection.
     * @property {Boolean} multiSelection - Enables multi-selection.
     * @property {Boolean} singleSelection - Enables single selection.
     * @property {Boolean} allSelection - Enables selection of all rows.
     * @property {Boolean} checkbox - Enables checkbox selection.
     * @return {Object} The properties object.
     */
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
            summaries: { type: Array },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },
            allSelection: { type: Boolean },
            checkbox: { type: Boolean },
        };
    }

    /**
     * Get the indeterminate state for the checkbox.
     * @return {boolean} True if some rows are selected, but not all.
     * @readonly
     */
    get indeterminate() {
        const selected = this.rows?.filter((row) => row.selected).length;
        return selected > 0 && selected < this.rows?.length;
    }

    /**
     * Get the selected state for the checkbox.
     * @return {boolean} True if all rows are selected.
     * @readonly
     */
    get selected() {
        const selected = this.rows?.filter((row) => row.selected).length;
        return selected > 0 && selected == this.rows?.length;
    }

    /**
     * Constructor for MDDataTableComponent.
     * Initializes default values for selection and store.
     */
    constructor() {
        super();
        this.rangeSelection = true;
        this.multiSelection = true;
        this.singleSelection = true;
        this.allSelection = true;

        this.store = new MDStoreModule();
        // this.store.remoteStore.url.search=MDRouterModule.location.search
    }

    /**
     * Check if a column should be sticky to the left.
     * @param {number} index - The index of the column.
     * @return {boolean} True if the column should be sticky to the left.
     */
    isStickyLeft(index) {
        const middle = Math.floor(this.columns.length / 2);
        return index <= middle;
    }

    /**
     * Check if there are any sticky columns.
     * @return {boolean} True if there are sticky columns.
     */
    hasSticky() {
        return !!this.columns.find((column) => column.sticky);
    }

    /**
     * Check if a column has a sticky border.
     * @param {string} position - The position of the sticky border ('left' or 'right').
     * @param {number} index - The index of the column.
     * @return {boolean} True if the column has a sticky border.
     */
    hasStickyBorder(position, index) {
        const middle = Math.floor(this.columns.length / 2);

        let maxLeftIndex = -1;
        let minRightIndex = this.columns.length;

        this.columns.forEach((column, i) => {
            if (column.sticky) {
                if (i <= middle) {
                    if (i > maxLeftIndex) {
                        maxLeftIndex = i;
                    }
                } else {
                    if (i < minRightIndex) {
                        minRightIndex = i;
                    }
                }
            }
        });

        if (position === "left") {
            return maxLeftIndex === index;
        }

        return minRightIndex === index;
    }

    /**
     * Render an item.
     * @param {Object} item - The item to render.
     * @return {TemplateResult} The rendered item.
     */
    renderItem(item) {
        return html`
            <md-data-table-item
                .data="${item}"
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
                .badge="${ifDefined(item.badge)}"
                .text="${ifDefined(item.text)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                .sortable="${ifDefined(item.sortable)}"
                .sortableIcon="${ifDefined(item.sortableIcon)}"
                .trailingActions="${ifDefined(item.trailingActions)}"
            ></md-data-table-item>
        `;
    }

    /**
     * Render the column cell checkbox.
     * @fires MDDataTableComponent#onDataTableItemCheckboxNativeInput
     * @return {TemplateResult|null} The rendered column cell checkbox or nothing.
     */
    renderColumnCellCheckbox() {
        return this.checkbox
            ? html`
                  <th
                      is="md-data-table-native-column-cell"
                      class="${classMap({
                          "md-data-table__sticky": true,
                          "md-data-table__sticky--column": true,
                          "md-data-table__sticky--top": true,
                          "md-data-table__sticky--left": true,
                          "md-data-table__sticky--end": !this.hasSticky(),
                      })}"
                      @onDataTableItemCheckboxNativeInput="${this.handleDataTableColumnCellCheckboxInput}"
                  >
                      ${this.renderItem({
                          leadingCheckbox: {},
                          indeterminate: this.indeterminate,
                          selected: this.selected,
                      })}
                  </th>
              `
            : nothing;
    }

    /**
     * Render the row cell checkbox.
     * @fires MDDataTableComponent#onDataTableItemCheckboxNativeInput
     * @param {Object} row - The row to render the checkbox for.
     * @return {TemplateResult|null} The rendered row cell checkbox or nothing.
     */
    renderRowCellCheckbox(row) {
        return this.checkbox
            ? html`
                  <td
                      is="md-data-table-native-row-cell"
                      .data="${row}"
                      class="${classMap({
                          "md-data-table__sticky": true,
                          "md-data-table__sticky--row": true,
                          "md-data-table__sticky--left": true,
                          "md-data-table__sticky--end": !this.hasSticky(),
                      })}"
                      @onDataTableItemCheckboxNativeInput="${this.handleDataTableRowCellCheckboxInput}"
                  >
                      ${this.renderItem({
                          leadingCheckbox: {},
                          selected: row.selected,
                      })}
                  </td>
              `
            : nothing;
    }

    /**
     * Render the column cells.
     * @return {TemplateResult[]} The rendered column cells.
     */
    renderColumnCells() {
        /* prettier-ignore */
        return this.columns?.filter(column=>column.selected!==false)?.map((column, index) => html`
            <th
                .data="${column}"
                is="md-data-table-native-column-cell"
                resizable
                moveable
                style="${styleMap({
                    'min-width':column.width+'px'
                })}"
                class="${classMap({
                    'md-data-table__sticky':true,
                    'md-data-table__sticky--top':true,
                    'md-data-table__sticky--column':column.sticky,
                    'md-data-table__sticky--left':column.sticky&&this.isStickyLeft(index),
                    'md-data-table__sticky--right':column.sticky&&!this.isStickyLeft(index),
                    'md-data-table__sticky--end':column.sticky&&this.hasStickyBorder('left',index),
                    'md-data-table__sticky--start':column.sticky&&this.hasStickyBorder('right',index),
                })}"
                @pointerenter="${this.handleDataTableColumnCellSortablePointerenter}"
                @pointerleave="${this.handleDataTableColumnCellSortablePointerleave}"
                @onDataTableItemSortableClick="${this.handleDataTableColumnCellSortableClick}"

                @onResizeStart="${this.handleDataTabaleColumnCellResizeStart}"
                @onResize="${this.handleDataTabaleColumnCellResize}"
                @onResizeEnd="${this.handleDataTabaleColumnCellResizeEnd}"
                @onResizeDoubleTap="${this.handleDataTabaleColumnCellResizeDoubleTap}"
                @onDragStart="${this.handleDataTabaleColumnCellDragStart}"
                @onDrag="${this.handleDataTabaleColumnCellDrag}"
                @onDragEnd="${this.handleDataTabaleColumnCellDragEnd}"
            >
                ${this.renderItem({
                    label: column.label,
                    sortable: column.sortable,
                    sortableIcon: /* (column.order=='asc'?'arrow_upward':column.order=='desc'?'arrow_downward':'')|| */column.sortableIcon||'',
                    // trailingActions:[
                    //     {icon:'keyboard_arrow_down'}
                    // ]
                })}
            </th>
        `)
    }

    /**
     * Renders the rows of the data table.
     * @return {TemplateResult[]} The rendered rows.
     */
    renderRows() {
        /* prettier-ignore */
        return this.virtualRows?.map(row => html`
            <tr
                .data="${row}"
                .tabIndex="${0}"
                ?selected="${row.selected}"
                @click="${this.handleDataTableRowClick}"
            >
                ${this.renderRowCellCheckbox(row)}
                ${this.columns?.filter(column=>column.selected!==false)?.map((column, index) => html`
                    <td
                        is="md-data-table-native-row-cell"
                        class="${classMap({
                            'md-data-table__sticky':column.sticky,
                            'md-data-table__sticky--row':column.sticky,
                            'md-data-table__sticky--left':column.sticky&&this.isStickyLeft(index),
                            'md-data-table__sticky--right':column.sticky&&!this.isStickyLeft(index),
                            'md-data-table__sticky--end':column.sticky&&this.hasStickyBorder('left',index),
                            'md-data-table__sticky--start':column.sticky&&this.hasStickyBorder('right',index),
                        })}"
                    >
                        ${this.renderItem({
                            label: (column.format||((value,row,column) => value))(row[column.name],row,column)
                        })}
                    </td>
                `)}
                <td>
                    <div class="md-data-table__item"></div>
                </td>
            </tr>
        `)
    }

    /**
     * Renders the MDDataTableComponent.
     * @return {TemplateResult} The rendered MDDataTableComponent.
     */
    render() {
        /* prettier-ignore */
        return html`
            <table
                @onVirtualScroll="${this.handleDataTableNativeVirtualScroll}"
            >
                <caption></caption>
                <thead>
                    <tr>
                        ${this.renderColumnCellCheckbox()}
                        ${this.renderColumnCells()}
                        <th 
                            style="width:100%;"
                            class="md-data-table__sticky md-data-table__sticky--column md-data-table__sticky--top"
                        >
                            <div class="md-data-table__item"></div>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    ${this.renderRows()}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        `
    }

    /**
     * Connected Callback lifecycle method of the MDDataTableComponent.
     * Attaches event listeners and initializes virtual scrolling.
     */
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataTableKeydown);

        this.host = this.querySelector("table");
        this.virtualScroll = new MDVirtualScrollModule(this.host, {
            scrollbar: "table caption",
            container: "table tbody",
            row: "table tbody tr",
            totalY: 100,
            // column: '',
        });
    }

    /**
     * Disconnected Callback lifecycle method of the MDDataTableComponent.
     * Removes event listeners and destroys virtual scrolling.
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-table");
        this.removeEventListener("keydown", this.handleDataTableKeydown);

        this.virtualScroll.destroy();
    }

    /**
     * Updated lifecycle method of the MDDataTableComponent.
     * @param {Map} changedProperties - The properties that have changed.
     */
    async updated(changedProperties) {
        if (changedProperties.has("columns")) {
            // for(const [name,value] of this.store.remoteStore.url.searchParams.entries()){
            //     console.log(name,value)
            // }
        }
        if (changedProperties.has("rows")) {
            await this.updateComplete;
            this.store.localStore.docs = this.rows;
            this.load();
        }

        let height = this.querySelector("tbody").clientHeight + this.querySelector("thead").clientHeight;
        this.style.setProperty("--md-data-table-height", height + "px");
    }

    // Table

    /**
     * Handles keydown event for the data table.
     * @param {Event} event - The keydown event.
     */
    handleDataTableKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            event.preventDefault();
            this.rows.forEach((row) => {
                row.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onDataTableKeydown", event);
    }

    /**
     * Handles virtual scroll event for the data table.
     * @param {CustomEvent} event - The virtual scroll event.
     */
    async handleDataTableNativeVirtualScroll(event) {
        const { startY, endY } = event.detail;
        this.virtualRows = this.storeRows.slice(startY, endY);
        this.requestUpdate();
        this.emit("onDataTableNativeVirtualScroll", event);
    }

    // Column

    /**
     * Handles resize start event for the data table column cell.
     * @param {Event} event - The resize start event.
     */
    handleDataTabaleColumnCellResizeStart(event) {
        const data = event.currentTarget.data;
        // this.requestUpdate()
        this.emit("onDataTabaleColumnCellResizeStart", event);
    }

    /**
     * Handles resize event for the data table column cell.
     * @param {Event} event - The resize event.
     */
    handleDataTabaleColumnCellResize(event) {
        const data = event.currentTarget.data;

        data.width = event.currentTarget.gesture.currentWidth;
        this.requestUpdate();

        this.emit("onDataTabaleColumnCellResize", event);
    }

    /**
     * Handles resize end event for the data table column cell.
     * @param {Event} event - The resize end event.
     */
    handleDataTabaleColumnCellResizeEnd(event) {
        const data = event.currentTarget.data;
        // this.requestUpdate()
        this.emit("onDataTabaleColumnCellResizeEnd", event);
    }

    /**
     * Handles double tap event for the data table column cell.
     * @param {Event} event - The double tap event.
     */
    handleDataTabaleColumnCellResizeDoubleTap(event) {
        const th = event.currentTarget;
        const data = th.data;
        const index = Array.from(th.parentElement.children).indexOf(th);
        th.style.setProperty("max-width", "0%");
        const width = Math.max(
            ...Array.from(this.querySelectorAll(`td:nth-child(${index + 1}) .md-data-table__item`), (item) => {
                const label = item.querySelector(".md-data-table__label-primary");
                const style = window.getComputedStyle(item);
                const paddingLeft = parseFloat(style.getPropertyValue("padding-left"));
                const paddingRight = parseFloat(style.getPropertyValue("padding-right"));
                return paddingLeft + label.scrollWidth + paddingRight;
            }),
        );
        th.style.removeProperty("max-width");
        data.width = width;
        this.requestUpdate();

        this.emit("onDataTabaleColumnCellResizeDoubleTap", event);
    }

    /**
     * Handles drag start event for the data table column cell.
     * @param {Event} event - The drag start event.
     */
    handleDataTabaleColumnCellDragStart(event) {
        const th = event.currentTarget;
        const item = th.querySelector(".md-data-table__item");
        const { left, top, width, height } = item.getBoundingClientRect();
        this.cloneColumn = item.cloneNode(true);
        this.cloneColumn.style.setProperty("position", "absolute");
        this.cloneColumn.style.setProperty("left", left + "px");
        this.cloneColumn.style.setProperty("top", top + "px");
        this.cloneColumn.style.setProperty("width", width + "px");
        this.cloneColumn.style.setProperty("height", height + "px");
        this.cloneColumn.style.setProperty("z-index", 5);
        this.cloneColumn.style.setProperty("pointer-events", "none");
        this.cloneColumn.classList.add("md-ripple", "md-ripple--button", "md-ripple--containment", "md-ripple--dragged");
        document.body.append(this.cloneColumn);

        this.emit("onDataTabaleColumnCellDragStart", event);
    }

    /**
     * Handles drag event for the data table column cell.
     * @param {Event} event - The drag event.
     */
    handleDataTabaleColumnCellDrag(event) {
        const currentX = event.currentTarget.gesture.currentX;
        this.cloneColumn.style.setProperty("transform", `translate3d(${currentX}px,0px,0px)`);

        this.emit("onDataTabaleColumnCellDrag", event);
    }

    /**
     * Handles drag end event for the data table column cell.
     * @param {Event} event - The drag end event.
     */
    handleDataTabaleColumnCellDragEnd(event) {
        this.cloneColumn.remove();

        const fromTh = event.currentTarget;
        const x = event.detail.clientX;
        const y = event.detail.clientY;
        const toTh = document.elementFromPoint(x, y)?.closest("th");
        if (toTh && fromTh !== toTh) {
            const from = this.columns.indexOf(fromTh.data);
            const to = this.columns.indexOf(toTh.data);
            const [column] = this.columns.splice(from, 1);
            this.columns.splice(to, 0, column);
            this.requestUpdate();
        }

        this.emit("onDataTabaleColumnCellDragEnd", event);
    }

    /**
     * Handles sortable pointer enter event for the data table column cell.
     * @param {Event} event - The sortable pointer enter event.
     */
    handleDataTableColumnCellSortablePointerenter(event) {
        const data = event.currentTarget.data;
        const dragged = document.documentElement.classList.contains("md-gesture--dragged");

        if (data.sortable && !data.order && !dragged) {
            data.sortableIcon = "arrow_upward";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortablePointerenter", event);
    }

    /**
     * Handles sortable pointer leave event for the data table column cell.
     * @param {Event} event - The sortable pointer leave event.
     */
    handleDataTableColumnCellSortablePointerleave(event) {
        const data = event.currentTarget.data;

        if (data.sortable && !data.order) {
            data.sortableIcon = "";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortablePointerleave", event);
    }

    /**
     * Handles sortable click event for the data table column cell.
     * @param {Event} event - The sortable click event.
     */
    async handleDataTableColumnCellSortableClick(event) {
        const data = event.currentTarget.data;

        if (data.sortable) {
            if (!data.order) {
                data.order = "asc";
                data.sortableIcon = "arrow_upward";
            } else if (data.order == "asc") {
                data.order = "desc";
                data.sortableIcon = "arrow_downward";
            } else {
                data.order = "";
                data.sortableIcon = "";
            }

            this.store.sort(data.name, data.order);
            this.load();
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortableClick", event);
    }

    /**
     * Handles input event for the data table column cell checkbox.
     * @param {Event} event - The input event.
     */
    handleDataTableColumnCellCheckboxInput(event) {
        const checked = event.detail.currentTarget.checked;
        this.rows.forEach((row) => {
            row.selected = checked;
        });
        this.requestUpdate();
    }

    // Row

    /**
     * Handles click event for the data table row.
     * @param {Event} event - The click event.
     */
    handleDataTableRowClick(event) {
        if (event.target.closest(".md-data-table__checkbox,.md-data-table__radio-button,.md-data-table__switch")) {
            return;
        }
        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            if (this.lastIndex == undefined) {
                this.lastIndex = 0;
            }
            this.currentIndex = this.rows.indexOf(data);
            this.swapIndex = this.lastIndex > this.currentIndex;

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
            this.rows.forEach((row, index) => {
                row.selected = index >= this.lastIndex && index <= this.currentIndex;
            });

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.rows.forEach((row) => {
                row.selected = row == data;
            });
            this.lastIndex = this.rows.indexOf(data);
        }
        this.requestUpdate();
        this.emit("onDataTableItemClick", event);
    }

    /**
     * Handles input event for the data table row cell checkbox.
     * @param {Event} event - The input event.
     */
    handleDataTableRowCellCheckboxInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
    }

    /**
     * Loads data into the data table.
     */
    async load() {
        this.storeRows = await this.store.getAll();
        this.virtualScroll.options.totalY = this.store.localStore.total_rows;
        this.virtualScroll.handleScroll();
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent, MDDataTableItemComponent };
