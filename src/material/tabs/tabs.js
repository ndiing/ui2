import { MDListElement } from "../list/list.js";

/**
 * Custom element representing a tabs component.
 * Extends MDListElement for list functionalities.
 */
class MDTabsElement extends MDListElement {
    constructor() {
        super();

        /**
         * Indicates whether only one tab can be selected at a time.
         * @type {boolean}
         */
        this.singleSelection = true;
    }

    /**
     * Called when the element is inserted into the DOM.
     * Sets up necessary behaviors and observers.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");

        // this.handleListItemSelected = this.handleListItemSelected.bind(this);

        // /**
        //  * ResizeObserver instance to track changes in the element's size.
        //  * @type {ResizeObserver}
        //  */
        // this.resizeObserver = new ResizeObserver(this.handleListItemSelected);
        // this.resizeObserver.observe(this);
    }

    /**
     * Called when the element is removed from the DOM.
     * Cleans up behaviors and observers.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list");

        // this.resizeObserver.disconnect();
    }

    /**
     * Handles the selection of a list item.
     * Adjusts the indicator position based on the selected item's position.
     */
    handleListItemSelected() {
        window.requestAnimationFrame(() => {
            const listItem = this.querySelector(".md-list__item[selected]");
            const inner = listItem.querySelector(".md-list__inner");

            /**
             * Data associated with the selected list item.
             * @type {*}
             */
            const data = listItem.data;

            let left = listItem.offsetLeft;
            let width = listItem.clientWidth;

            if (this.allVariants.includes("primary")) {
                left += inner.offsetLeft;
                width = inner.clientWidth;
            }

            const right = this.clientWidth - (left + width);

            /**
             * Index of the currently selected item in the list.
             * @type {number}
             */
            this.currSelectedIndex = this.list.indexOf(data);

            /**
             * Index of the previously selected item in the list.
             * @type {number}
             */
            this.prevSelectedIndex = this.prevSelectedIndex ?? 0;

            /**
             * Direction of tab selection change ('left' or 'right').
             * @type {string}
             */
            const direction = this.prevSelectedIndex > this.currSelectedIndex ? "left" : "right";

            this.style.removeProperty(`--md-comp-tabs-indicator-delay-left`);
            this.style.removeProperty(`--md-comp-tabs-indicator-delay-right`);
            this.style.setProperty(`--md-comp-tabs-indicator-delay-${direction}`, "0ms");
            this.prevSelectedIndex = this.currSelectedIndex;

            this.style.setProperty("--md-comp-tabs-indicator-right", right + "px");
            this.style.setProperty("--md-comp-tabs-indicator-left", left + "px");
        });
    }
}

customElements.define("md-tabs", MDTabsElement);

export { MDTabsElement };
