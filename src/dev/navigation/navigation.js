import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNavigation extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-menu__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image",badge:0},
                            {label:"Item 3",icon:"image",badge:1},
                            {label:"Item 4",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-menu__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",selected:true},
                            {label:"Item 2",badge:0},
                            {label:"Item 3",badge:1},
                            {label:"Item 4",badge:1000},
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-navigation-bar__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image",badge:0},
                            {label:"Item 3",icon:"image",badge:1},
                            {label:"Item 4",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-navigation-bar__list"
                        .singleSelection="${true}"
                        .list="${[
                            {icon:"image",selected:true},
                            {icon:"image",badge:0},
                            {icon:"image",badge:1},
                            {icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-navigation-drawer__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image",badge:0},
                            {label:"Item 3",icon:"image",badge:1},
                            {label:"Item 4",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-navigation-drawer__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",selected:true},
                            {label:"Item 2",badge:0},
                            {label:"Item 3",badge:1},
                            {label:"Item 4",badge:1000},
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-navigation-rail__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image",badge:0},
                            {label:"Item 3",icon:"image",badge:1},
                            {label:"Item 4",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-navigation-rail__list"
                        .singleSelection="${true}"
                        .list="${[
                            {icon:"image",selected:true},
                            {icon:"image",badge:0},
                            {icon:"image",badge:1},
                            {icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item--expanded6 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-tab__list md-tab__list--primary"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image",badge:0},
                            {label:"Item 3",icon:"image",badge:1},
                            {label:"Item 4",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item--expanded6 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-tab__list md-tab__list--primary"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",selected:true},
                            {label:"Item 2",badge:0},
                            {label:"Item 3",badge:1},
                            {label:"Item 4",badge:1000},
                        ]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item--expanded6 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-tab__list md-tab__list--secondary"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image",badge:0},
                            {label:"Item 3",icon:"image",badge:1},
                            {label:"Item 4",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item--expanded6 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list
                        class="md-tab__list md-tab__list--secondary"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",selected:true},
                            {label:"Item 2",badge:0},
                            {label:"Item 3",badge:1},
                            {label:"Item 4",badge:1000},
                        ]}"
                    ></md-list>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-navigation", DevNavigation);

export default document.createElement("dev-navigation");
