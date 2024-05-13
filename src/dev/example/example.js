import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevExample extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-menu__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",selected:true},
                            {label:"Item 2"},
                            {label:"Item 3",badge:0},
                            {label:"Item 4",badge:1},
                            {label:"Item 5",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-menu__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image"},
                            {label:"Item 3",icon:"image",badge:0},
                            {label:"Item 4",icon:"image",badge:1},
                            {label:"Item 5",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-navigation-bar__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image"},
                            {label:"Item 3",icon:"image",badge:0},
                            {label:"Item 4",icon:"image",badge:1},
                            {label:"Item 5",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-navigation-bar__list"
                        .singleSelection="${true}"
                        .list="${[
                            {icon:"image",selected:true},
                            {icon:"image"},
                            {icon:"image",badge:0},
                            {icon:"image",badge:1},
                            {icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-navigation-drawer__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",selected:true},
                            {label:"Item 2"},
                            {label:"Item 3",badge:0},
                            {label:"Item 4",badge:1},
                            {label:"Item 5",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-navigation-drawer__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image"},
                            {label:"Item 3",icon:"image",badge:0},
                            {label:"Item 4",icon:"image",badge:1},
                            {label:"Item 5",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-navigation-rail__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image"},
                            {label:"Item 3",icon:"image",badge:0},
                            {label:"Item 4",icon:"image",badge:1},
                            {label:"Item 5",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-navigation-rail__list"
                        .singleSelection="${true}"
                        .list="${[
                            {icon:"image",selected:true},
                            {icon:"image"},
                            {icon:"image",badge:0},
                            {icon:"image",badge:1},
                            {icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-tab__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",selected:true},
                            {label:"Item 2"},
                            {label:"Item 3",badge:0},
                            {label:"Item 4",badge:1},
                            {label:"Item 5",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        class="md-tab__list"
                        .singleSelection="${true}"
                        .list="${[
                            {label:"Item 1",icon:"image",selected:true},
                            {label:"Item 2",icon:"image"},
                            {label:"Item 3",icon:"image",badge:0},
                            {label:"Item 4",icon:"image",badge:1},
                            {label:"Item 5",icon:"image",badge:1000},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {label:"Item 1"},
                            {label:"Item 2"},
                            {label:"Item 3"},
                            {label:"Item 4"},
                            {label:"Item 5"},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {label:"Item 1",routerLink:"/example"},
                            {label:"Item 2",routerLink:"/example"},
                            {label:"Item 3",routerLink:"/example"},
                            {label:"Item 4",routerLink:"/example"},
                            {label:"Item 5",routerLink:"/example"},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {label:"Item 1"},
                            {label:"Item 2"},
                            {label:"Item 3"},
                            {label:"Item 4"},
                            {label:"Item 5"},
                        ]}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {label:"Item 1"},
                            {label:"Item 2"},
                            {label:"Item 3"},
                            {label:"Item 4"},
                            {label:"Item 5"},
                        ]}"
                        .singleSelection="${true}"
                        .multiSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {label:"Item 1"},
                            {label:"Item 2"},
                            {label:"Item 3"},
                            {label:"Item 4"},
                            {label:"Item 5"},
                        ]}"
                        .singleSelection="${true}"
                        .multiSelection="${true}"
                        .rangeSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {label:"Item 1"},
                            {label:"Item 2"},
                            {label:"Item 3"},
                            {label:"Item 4"},
                            {label:"Item 5"},
                        ]}"
                        .singleSelection="${true}"
                        .multiSelection="${true}"
                        .rangeSelection="${true}"
                        .allSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {avatar:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {avatar:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {avatar:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},avatar:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},avatar:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},avatar:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {image:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {image:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {image:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},image:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},image:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},image:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {video:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {video:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {video:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},video:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},video:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},video:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {icon:'image',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {icon:'image',label:'Headline',labelSecondary:'Supporting text'},
                            {icon:'image',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},icon:'image',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},icon:'image',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},icon:'image',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {label:'Headline',labelSecondary:'Supporting text'},
                            {label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {leadingCheckbox:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {leadingCheckbox:{},label:'Headline',labelSecondary:'Supporting text'},
                            {leadingCheckbox:{},label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {leadingCheckbox:{},text:'100+',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {leadingCheckbox:{},text:'100+',label:'Headline',labelSecondary:'Supporting text'},
                            {leadingCheckbox:{},text:'100+',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {leadingRadioButton:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {leadingRadioButton:{},label:'Headline',labelSecondary:'Supporting text'},
                            {leadingRadioButton:{},label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {leadingRadioButton:{},text:'100+',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {leadingRadioButton:{},text:'100+',label:'Headline',labelSecondary:'Supporting text'},
                            {leadingRadioButton:{},text:'100+',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingSwitch:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingSwitch:{},label:'Headline',labelSecondary:'Supporting text'},
                            {trailingSwitch:{},label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingSwitch:{},icon:'image',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingSwitch:{},icon:'image',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingSwitch:{},icon:'image',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-example", DevExample);

export default document.createElement("dev-example");
