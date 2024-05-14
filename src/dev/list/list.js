import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Router } from "../../lib/router/router";

class DevList extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {avatar:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {avatar:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {avatar:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},avatar:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},avatar:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},avatar:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>

                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {image:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {image:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {image:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},image:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},image:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},image:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>

                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {video:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {video:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {video:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},video:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},video:'https://placehold.co/600x400',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},video:'https://placehold.co/600x400',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>

                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {icon:'image',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {icon:'image',label:'Headline',labelSecondary:'Supporting text'},
                            {icon:'image',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},icon:'image',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},icon:'image',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},icon:'image',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>

                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {label:'Headline',labelSecondary:'Supporting text'},
                            {label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingCheckbox:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingCheckbox:{},label:'Headline',labelSecondary:'Supporting text'},
                            {trailingCheckbox:{},label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>

                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {leadingCheckbox:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {leadingCheckbox:{},label:'Headline',labelSecondary:'Supporting text'},
                            {leadingCheckbox:{},label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {leadingCheckbox:{},text:'100+',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {leadingCheckbox:{},text:'100+',label:'Headline',labelSecondary:'Supporting text'},
                            {leadingCheckbox:{},text:'100+',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>

                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {leadingRadioButton:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {leadingRadioButton:{},label:'Headline',labelSecondary:'Supporting text'},
                            {leadingRadioButton:{},label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {leadingRadioButton:{},text:'100+',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {leadingRadioButton:{},text:'100+',label:'Headline',labelSecondary:'Supporting text'},
                            {leadingRadioButton:{},text:'100+',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>

                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingSwitch:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingSwitch:{},label:'Headline',labelSecondary:'Supporting text'},
                            {trailingSwitch:{},label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-list
                        .list="${[
                            {trailingSwitch:{},icon:'image',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
                            {trailingSwitch:{},icon:'image',label:'Headline',labelSecondary:'Supporting text'},
                            {trailingSwitch:{},icon:'image',label:'Headline'},
                        ]}"
                    ></md-list>
                </div>
                <div class="md-layout__item md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                </div>
                
                
            </div>
        `;
    }

}

customElements.define("dev-list", DevList);

export default document.createElement("dev-list");
