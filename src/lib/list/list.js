import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { Ripple } from "../ripple/ripple";
import { Gesture } from "../gesture/gesture";

class MDListItem extends HTMLLIElement {
    connectedCallback() {
        this.gesture = new Gesture(this, {
            dragStartWaitForLongPress: true,
            resizeHandles: [],
        });
    }
    disconnectedCallback() {
        this.gesture.destroy();
    }
}
customElements.define("md-list-item", MDListItem, { extends: "li" });

class MDListContainer extends MDElement {
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            routerLink: { type: String, reflect: true },
            selected: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-list__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-list__label">${this.label}</div>`:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__container");
        await this.updateComplete;
        this.ripple = new Ripple(this, {});
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list__container");
        this.ripple.destroy();
    }

    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onListContainerSelected", this);
            }
        }
    }
}
customElements.define("md-list-container", MDListContainer);

class MDList extends MDElement {
    static get properties() {
        return {
            list: { type: Array },
            
            valueField: { type: String },
            labelField: { type: String },

            selectRange: { type: Boolean },
            selectMulti: { type: Boolean },
            selectSingle: { type: Boolean },
            selectAll: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.list = [];
        this.valueField='value'
        this.labelField='label'
    }

    render() {
        // prettier-ignore
        return html`
            <ul>
                ${this.list.map(item=>html`
                    <li
                        is="md-list-item"
                        .data="${item}"
                        tabIndex="0"
                        @onDragStart="${false&&this.handleListItemDragStart||(() => {})}"
                        @onDrag="${false&&this.handleListItemDrag||(() => {})}"
                        @onDragEnd="${false&&this.handleListItemDragEnd||(() => {})}"
                    >
                        <md-list-container
                            .data="${item}"
                            .icon="${item.icon}"
                            .label="${item[this.labelField]}"
                            .value="${item[this.valueField]}"
                            .routerLink="${item.routerLink}"
                            .selected="${item.selected}"
                            @click="${this.handleListItemContainerClick}"
                        ></md-list-container>
                    </li>
                `)}
            </ul>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
        this.addEventListener("keydown", this.handleListKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list");
        this.removeEventListener("keydown", this.handleListKeydown);
    }

    updated(changedProperties) {}

    handleListKeydown(event) {
        if (this.selectAll&&event.ctrlKey && event.key === "a") {
            event.preventDefault();
            this.list.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
            this.emit('onListKeydownCtrlA',event)
        }
    }

    get selectedItems(){
        return this.list.filter(item=>item.selected)
    }

    handleListItemContainerClick(event) {
        const data = event.currentTarget.data;
        this.currentSelectedIndex = this.list.indexOf(data);

        if (this.selectRange&&event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;

            if (this.lastSelectedIndex > this.currentSelectedIndex) {
                [this.lastSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.lastSelectedIndex];
            }
            this.list.forEach((item, index) => {
                item.selected = index >= this.lastSelectedIndex && index <= this.currentSelectedIndex;
            });
        } else if (this.selectMulti&&event.ctrlKey) {
            data.selected = !data.selected;
        } else if(this.selectSingle) {
            this.list.forEach((item) => {
                item.selected = item === data;
            });
        }
        this.lastSelectedIndex = this.currentSelectedIndex;

        this.requestUpdate();
        this.emit('onListItemContainerClick',event)
    }

    handleListItemDragStart(event) {
        this.fromItem = event.currentTarget;
        this.fromItemRect = this.fromItem.children[0].getBoundingClientRect();
        this.fromItemDragged = this.fromItem.children[0].cloneNode(true);
        this.parentElement.insertBefore(this.fromItemDragged, this.nextElementSibling);
        this.fromItemDragged.style.setProperty("width", this.fromItemRect.width + "px");
        this.fromItemDragged.style.setProperty("height", this.fromItemRect.height + "px");
        this.fromItemDragged.style.setProperty("position", "absolute");
        this.fromItemDragged.style.setProperty("left", this.fromItemRect.left + "px");
        this.fromItemDragged.style.setProperty("top", this.fromItemRect.top + "px");
        this.fromItemDragged.style.setProperty("z-index", 1);
        this.fromItemDragged.style.setProperty("pointer-events", "none");
        this.fromItemDragged.classList.add("md-ripple");
        this.fromItemDragged.classList.add("md-ripple--containment");
        this.fromItemDragged.classList.add("md-ripple--button");
        this.fromItemDragged.classList.add("md-ripple--dragged");
        this.emit('onListItemDragStart',event)
    }

    handleListItemDrag(event) {
        this.fromItemDragged.style.setProperty("transform", `translate3d(0px,${event.detail.moveY}px,0)`);
        this.emit('onListItemDrag',event)
    }

    handleListItemDragEnd(event) {
        const toItem = event.detail.target?.closest("li");
        if (toItem && this.toItem !== toItem && !this.fromItem !== toItem) {
            this.toItem = toItem;
            const oldIndex = this.list.indexOf(this.fromItem.data);
            const newIndex = this.list.indexOf(this.toItem.data);
            this.reorderArray(this.list, oldIndex, newIndex);
            this.requestUpdate();
        }
        this.fromItem = null;
        this.toItem = null;
        this.fromItemDragged.remove();
        this.emit('onListItemDragEnd',event)
    }

    reorderArray(array, oldIndex, newIndex) {
        const element = array.splice(oldIndex, 1)[0];
        array.splice(newIndex, 0, element);
        return array;
    }
}
customElements.define("md-list", MDList);
export { MDList };
