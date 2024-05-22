import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNestedList extends MDElement {
    constructor(){
        super()

        this.list = [
            {label:'Label 1',children:[
                {label:"Label 1.1",children:[
                    {label:"Label 1.1.1"},
                    {label:"Label 1.1.2"},
                    {label:"Label 1.1.3"},
                    {label:"Label 1.1.4"},
                ]},
                {label:"Label 1.2"},
                {label:"Label 1.3"},
                {label:"Label 1.4"},
            ]},
            {label:'Label 2'},
            {label:'Label 3',children:[
                {label:"Label 3.1"},
                {label:"Label 3.2"},
                {label:"Label 3.3"},
                {label:"Label 3.4"},
            ]},
            {label:'Label 4'},
        ]
        this.list2 = [
            {label:'Label 1',children:[
                {label:"Label 1.1",children:[
                    {label:"Label 1.1.1"},
                    {label:"Label 1.1.2"},
                    {label:"Label 1.1.3"},
                    {label:"Label 1.1.4"},
                ]},
                {label:"Label 1.2"},
                {label:"Label 1.3"},
                {label:"Label 1.4"},
            ]},
            {label:'Label 2'},
            {label:'Label 3',children:[
                {label:"Label 3.1"},
                {label:"Label 3.2"},
                {label:"Label 3.3"},
                {label:"Label 3.4"},
            ]},
            {label:'Label 4'},
        ]
        this.list3 = [
            {label:'Label 1',children:[
                {label:"Label 1.1",children:[
                    {label:"Label 1.1.1"},
                    {label:"Label 1.1.2"},
                    {label:"Label 1.1.3"},
                    {label:"Label 1.1.4"},
                ]},
                {label:"Label 1.2"},
                {label:"Label 1.3"},
                {label:"Label 1.4"},
            ]},
            {label:'Label 2'},
            {label:'Label 3',children:[
                {label:"Label 3.1"},
                {label:"Label 3.2"},
                {label:"Label 3.3"},
                {label:"Label 3.4"},
            ]},
            {label:'Label 4'},
        ]
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-nested-list .list="${this.list}" ui="tree"></md-nested-list>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-nested-list .list="${this.list2}" ui="card"></md-nested-list>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-nested-list .list="${this.list3}" ui="accordion"></md-nested-list>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-nested-list", DevNestedList);

export default document.createElement("dev-nested-list");
