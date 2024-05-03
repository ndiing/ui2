import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";
import { Gesture } from "../gesture/gesture";

class MDNavigationDrawer extends MDElement {
    static get properties() {
        return Object.assign(MDList.properties, {
            open: { type: Boolean, reflect: true },
        });
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-navigation-drawer__body">
                <div class="md-navigation-drawer__inner">
                    <md-list
                        class="md-navigation-drawer__list"
                        .list="${this.list}"
                        .selectSingle="${true}"
                    ></md-list>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-drawer");

        this.navigationDrawerScrimElement = document.createElement("div");
        document.body.append(this.navigationDrawerScrimElement);
        this.navigationDrawerScrimElement.classList.add("md-navigation-drawer__scrim");
        this.handleNavigationDrawerScrimClick = this.handleNavigationDrawerScrimClick.bind(this);
        this.navigationDrawerScrimElement.addEventListener("click", this.handleNavigationDrawerScrimClick);

        // new Gesture(this,{
        //   resizeHandles: ['e'],
        // })
        // let offsetWidthStart
        // this.addEventListener('onResizeStart', (event) => {
        //   offsetWidthStart=event.currentTarget.offsetWidth-event.detail.clientX
        // })
        // this.addEventListener('onResize', (event) => {
        //   const width=(offsetWidthStart+event.detail.clientX)
        //   event.currentTarget.style.width=width+'px'
        // })
        // this.addEventListener('onResizeEnd', (event) => {
        //   console.log(event)
        // })
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-drawer");

        this.navigationDrawerScrimElement.remove();
    }

    firstUpdated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.navigationDrawerScrimElement.classList.add("md-navigation-drawer--open");
            } else {
                this.navigationDrawerScrimElement.classList.remove("md-navigation-drawer--open");
            }
        }
    }

    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.navigationDrawerScrimElement.classList.add("md-navigation-drawer--open");
            } else {
                this.navigationDrawerScrimElement.classList.remove("md-navigation-drawer--open");
            }
        }
    }

    handleNavigationDrawerActionClick(event) {
        this.emit("onNavigationDrawerActionClick", event);
    }

    handleNavigationDrawerButtonClick(event) {
        this.emit("onNavigationDrawerButtonClick", event);
    }

    handleNavigationDrawerScrimClick(event) {
        this.close();
        this.emit("onNavigationDrawerScrimClick", event);
    }

    close() {
        this.open = false;
    }
    show() {
        this.open = true;
    }
}

customElements.define("md-navigation-drawer", MDNavigationDrawer);

export { MDNavigationDrawer };
