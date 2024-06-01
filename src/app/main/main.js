import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { msg } from "@lit/localize";
import { toTitleCase } from "../../com/mixin/mixin";
import { layout } from "../../com/layout/layout";
import { MDRouterModule } from "../../com/router/router";

class AppMainElement extends MDElement {
    constructor() {
        super();
        this.list = [
            { path: "layout" }, //
            { path: "typography" }, //
            { path: "image" }, //
            { path: "icon" }, //
            { path: "ripple" }, //
            { path: "popper" }, //
            { path: "virtual-scroll" }, //
            { path: "gesture" }, //
            { path: "icon-button" }, //
            { path: "form" }, //
            { path: "checkbox" }, //
            { path: "radio-button" }, //
            { path: "switch" }, //
            { path: "badge" }, //
            { path: "fab" }, //
            { path: "button" }, //
            { path: "segmented-button" }, //
            { path: "list" }, //
            { path: "nested-list" }, //
            { path: "navigation" }, //
            { path: "card" }, //
            { path: "dialog" }, //
            { path: "side-sheet" }, //
            { path: "bottom-sheet" }, //
            { path: "navigation-drawer" }, //
            { path: "navigation-rail" }, //
            { path: "navigation-bar" }, //
            { path: "bottom-app-bar" }, //
            { path: "top-app-bar" }, //
            { path: "snackbar" }, //
            { path: "menu" }, //
            { path: "tooltip" }, //
            { path: "tabs" }, //
            { path: "datetime-picker" }, //
            { path: "date-picker" }, //
            { path: "time-picker" }, //
            { path: "month-picker" }, //
            { path: "week-picker" }, //
            { path: "color-picker" }, //
            { path: "chips" }, //
            { path: "slider" }, //
            { path: "progress-indicator" }, //
            { path: "text-field" }, //
            { path: "number-field" }, //
            { path: "tel-field" }, //
            { path: "email-field" }, //
            { path: "url-field" }, //
            { path: "password-field" }, //
            { path: "search-field" }, //
            { path: "color-field" }, //
            { path: "file-field" }, //
            { path: "datetime-field" }, //
            { path: "date-field" }, //
            { path: "month-field" }, //
            { path: "week-field" }, //
            { path: "time-field" }, //
            { path: "data-table" }, //
        ].map((doc) => ({
            leadingIcon: "package_2",
            label: toTitleCase(doc.path),
            routerLink: "/" + doc.path,
            selected: MDRouterModule.path == "/" + doc.path,
        }));
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">

                <md-top-app-bar
                    id="bar"
                    .leadingActions="${[{icon:'menu'}]}"
                    @onTopAppBarActionClick="${() => this.drawer.toggle()}"
                    .open="${true}"
                ></md-top-app-bar>

                <md-navigation-drawer
                    id="drawer"
                    .list="${this.list}"
                    .open="${true}"
                    @onNestedListItemClick="${this.handleListItemClick}"
                    @onNestedListItemSelected="${this.handleListItemSelected}"
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                </div>
            </div>
        `
    }

    get bar() {
        return this.querySelector("#bar");
    }
    get drawer() {
        return this.querySelector("#drawer");
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.handleLayoutChange = this.handleLayoutChange.bind(this);
        window.addEventListener("onLayoutChange", this.handleLayoutChange);
        this.handleLayoutChange({ detail: layout.item });
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        await this.updateComplete;
    }

    handleLayoutChange(event) {
        if (event.detail.name == "expanded") {
            this.bar.close();
            this.drawer.ui = "";
            this.drawer.show();
        } else {
            this.drawer.ui = "modal";
            this.drawer.close();
            this.bar.show();
        }
    }

    handleListItemClick() {
        if (layout.item.name !== "expanded") {
            this.drawer.close();
        }
    }

    handleListItemSelected(event) {
        window.requestAnimationFrame(() => {
            event.detail.scrollIntoView({
                block: "center",
                inline: "center",
                behavior: "smooth",
            });
        });
    }
}

customElements.define("app-main", AppMainElement);

export default document.createElement("app-main");
