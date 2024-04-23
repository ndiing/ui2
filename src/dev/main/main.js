import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";

class DevMain extends MDElement {
    constructor() {
        super();
        // this.list = [
        //     // { label: "/", routerLink: "/" },
        //     // { label: "/blogs", routerLink: "/blogs" },
        //     // { label: "/blogs/:_id", routerLink: "/blogs/:_id" },
        //     { label: "/gesture", routerLink: "/gesture" },
        //     { label: "/ripple", routerLink: "/ripple" },
        //     { label: "/icon", routerLink: "/icon" },
        //     { label: "/emoji", routerLink: "/emoji" },
        //     { label: "/button", routerLink: "/button" },
        //     { label: "/list", routerLink: "/list" },
        //     { label: "/data-table", routerLink: "/data-table" },
        //     { label: "/form-field", routerLink: "/form-field" },
        //     { label: "/text-field", routerLink: "/text-field" },
        //     { label: "/range-field", routerLink: "/range-field" },
        //     // { label: "/admin", routerLink: "/admin" },
        //     // { label: "/admin/users", routerLink: "/admin/users" },
        //     // { label: "/admin/users/:_id", routerLink: "/admin/users/:_id" },
        //     // { label: "/auth", routerLink: "/auth" },
        //     // { label: "/auth/login", routerLink: "/auth/login" },
        //     // { label: "/auth/verify", routerLink: "/auth/verify" },
        //     // { label: "/auth/register", routerLink: "/auth/register" },
        //     // { label: "/*", routerLink: "/*" },
        // ];
        this.list = [
            // { label: "/ripple", routerLink: "/ripple" },
            // { label: "/gesture", routerLink: "/gesture" },
            // { label: "/popper", routerLink: "/popper" },
            { label: "/button", routerLink: "/button" },
            { label: "/extended-fab", routerLink: "/extended-fab" },
            { label: "/fab", routerLink: "/fab" },
            { label: "/icon-button", routerLink: "/icon-button" },
            { label: "/badge", routerLink: "/badge" },
            // { label: "/progress-indicator", routerLink: "/progress-indicator" },
            // { label: "/snackbar", routerLink: "/snackbar" },
            { label: "/tooltip", routerLink: "/tooltip" },
            { label: "/dialog", routerLink: "/dialog" },
            // { label: "/bottom-sheet", routerLink: "/bottom-sheet" },
            // { label: "/bottom-app-bar", routerLink: "/bottom-app-bar" },
            { label: "/navigation-bar", routerLink: "/navigation-bar" },
            { label: "/navigation-drawer", routerLink: "/navigation-drawer" },
            { label: "/navigation-rail", routerLink: "/navigation-rail" },
            // { label: "/tab", routerLink: "/tab" },
            { label: "/top-app-bar", routerLink: "/top-app-bar" },
            { label: "/form", routerLink: "/form" },
            // { label: "/select-field", routerLink: "/select-field" },
            // { label: "/textarea-field", routerLink: "/textarea-field" },
            { label: "/email-field", routerLink: "/email-field" },
            { label: "/password-field", routerLink: "/password-field" },
            { label: "/url-field", routerLink: "/url-field" },
            // { label: "/search-field", routerLink: "/search-field" },
            // { label: "/number-field", routerLink: "/number-field" },
            { label: "/tel-field", routerLink: "/tel-field" },
            // { label: "/date-field", routerLink: "/date-field" },
            { label: "/datetime-field", routerLink: "/datetime-field" },
            // { label: "/month-field", routerLink: "/month-field" },
            // { label: "/time-field", routerLink: "/time-field" },
            // { label: "/week-field", routerLink: "/week-field" },
            // { label: "/color-field", routerLink: "/color-field" },
            // { label: "/file-field", routerLink: "/file-field" },
            { label: "/text-field", routerLink: "/text-field" },
            // { label: "/card", routerLink: "/card" },
            { label: "/list", routerLink: "/list" },
            // { label: "/side-sheet", routerLink: "/side-sheet" },
            // { label: "/divider", routerLink: "/divider" },
            // { label: "/carousel", routerLink: "/carousel" },
            { label: "/checkbox", routerLink: "/checkbox" },
            { label: "/radio-button", routerLink: "/radio-button" },
            { label: "/slider", routerLink: "/slider" },
            { label: "/switch", routerLink: "/switch" },
            // { label: "/date-picker", routerLink: "/date-picker" },
            // { label: "/time-picker", routerLink: "/time-picker" },
            // { label: "/chip", routerLink: "/chip" },
            { label: "/menu", routerLink: "/menu" },
            // { label: "/search", routerLink: "/search" },
            // { label: "/segmented-button", routerLink: "/segmented-button" },
            { label: "/data-table", routerLink: "/data-table" },
            // { label: "/pagination", routerLink: "/pagination" },
        ].map((item) => {
            item.selected = item.routerLink === Router.path;
            return item;
        });
    }
    render() {
        // prettier-ignore
        return html`
            <!-- <h1>${msg("Main")}</h1> -->
            <!-- <div class="md-layout"> -->
                <div class="md-layout__border">
                    <div class="md-layout__region md-layout__region--w" style="width:360px;">
                        <md-list
                            class="md-list--navigation-drawer"
                            .list="${this.list}"
                            .singleSelection="${true}"
                            @onListContainerSelected="${this.handleListContainerSelected}"
                        ></md-list>
                    </div>
                    <div class="md-layout__region md-layout__region--c" style="padding:24px;">
                        <md-outlet></md-outlet>
                    </div>
                </div>
            <!-- </div> -->
        `;
    }
    handleListContainerSelected(event) {
        event.detail.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        });

    }
}

customElements.define("dev-main", DevMain);

export default document.createElement("dev-main");
