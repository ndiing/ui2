import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { MDList } from "../list/list";
import { Gesture } from "../gesture/gesture";

class MDNavigationDrawer extends MDElement {

    static get properties() {
        return Object.assign(MDList.properties, { open: { type: Boolean, reflect: true } });
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-navigation-drawer__container">
                <div class="md-navigation-drawer__body">
                    <md-list 
                        class="md-list--navigation-drawer"
                        .list="${this.list}"
                    ></md-list>
                </div>
            </div>
            <div class="md-navigation-drawer__scrim" @click="${this.handleNavigationDrawerScrimClick}"></div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-drawer");
        // await this.updateComplete
        // this.gesture=new Gesture(this.navigationDrawerContainer,{})
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-drawer");
        // this.gesture.destroy()
    }

    updated(changedProperties) {}

    get navigationDrawerContainer(){
        return this.querySelector('.md-navigation-drawer__container')
    }

    close() {
        this.open = false;
    }

    show() {
        this.open = true;
    }

    showModal() {}

    handleNavigationDrawerScrimClick(event) {
        this.close();
        this.emit("onNavigationDrawerScrimClick", event);
    }

    handleNavigationDrawerButtonClick(event) {
        this.emit("onNavigationDrawerButtonClick", event);
    }
}
customElements.define("md-navigation-drawer", MDNavigationDrawer);
export { MDNavigationDrawer };
