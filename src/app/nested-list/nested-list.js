import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppNestedListElement extends MDElement {
    constructor() {
        super();

        this.list1 = [
            {
                label: "Root",
            },
            {
                label: "Node",
            },
            { label: "With" },
            { label: "No" },
            { label: "Children" },
        ];

        this.list2 = [
            {
                label: "Root",
            },
            {
                label: "Node",
            },
            { label: "With" },
            { label: "No" },
            { label: "Children" },
        ];

        this.list3 = [
            {
                label: "Root",
            },
            {
                label: "Node",
            },
            { label: "With" },
            { label: "No" },
            { label: "Children" },
        ];

        this.list4 = [
            {
                label: "Item 1",
                children: [
                    {
                        label: "Item 1.1",
                        children: [
                            {
                                label: "Item 1.1.1",
                                children: [{ label: "Item 1.1.1.1" }, { label: "Item 1.1.1.2" }, { label: "Item 1.1.1.3" }, { label: "Item 1.1.1.4" }, { label: "Item 1.1.1.5" }],
                            },
                            {
                                label: "Item 1.1.2",
                                children: [{ label: "Item 1.1.2.1" }, { label: "Item 1.1.2.2" }, { label: "Item 1.1.2.3" }, { label: "Item 1.1.2.4" }, { label: "Item 1.1.2.5" }],
                            },
                            { label: "Item 1.1.3" },
                            { label: "Item 1.1.4" },
                            { label: "Item 1.1.5" },
                        ],
                    },
                    {
                        label: "Item 1.2",
                        children: [
                            {
                                label: "Item 1.2.1",
                                children: [{ label: "Item 1.2.1.1" }, { label: "Item 1.2.1.2" }, { label: "Item 1.2.1.3" }, { label: "Item 1.2.1.4" }, { label: "Item 1.2.1.5" }],
                            },
                            { label: "Item 1.2.2" },
                            { label: "Item 1.2.3" },
                            { label: "Item 1.2.4" },
                            { label: "Item 1.2.5" },
                        ],
                    },
                    { label: "Item 1.3" },
                    { label: "Item 1.4" },
                    { label: "Item 1.5" },
                ],
            },
            {
                label: "Item 2",
                children: [{ label: "Item 2.1" }, { label: "Item 2.2" }, { label: "Item 2.3" }, { label: "Item 2.4" }, { label: "Item 2.5" }],
            },
            { label: "Item 3" },
            { label: "Item 4" },
            { label: "Item 5" },
        ];

        this.list5 = [
            {
                label: "Item 1",
                children: [
                    {
                        label: "Item 1.1",
                        children: [
                            {
                                label: "Item 1.1.1",
                                children: [{ label: "Item 1.1.1.1" }, { label: "Item 1.1.1.2" }, { label: "Item 1.1.1.3" }, { label: "Item 1.1.1.4" }, { label: "Item 1.1.1.5" }],
                            },
                            {
                                label: "Item 1.1.2",
                                children: [{ label: "Item 1.1.2.1" }, { label: "Item 1.1.2.2" }, { label: "Item 1.1.2.3" }, { label: "Item 1.1.2.4" }, { label: "Item 1.1.2.5" }],
                            },
                            { label: "Item 1.1.3" },
                            { label: "Item 1.1.4" },
                            { label: "Item 1.1.5" },
                        ],
                    },
                    {
                        label: "Item 1.2",
                        children: [
                            {
                                label: "Item 1.2.1",
                                children: [{ label: "Item 1.2.1.1" }, { label: "Item 1.2.1.2" }, { label: "Item 1.2.1.3" }, { label: "Item 1.2.1.4" }, { label: "Item 1.2.1.5" }],
                            },
                            { label: "Item 1.2.2" },
                            { label: "Item 1.2.3" },
                            { label: "Item 1.2.4" },
                            { label: "Item 1.2.5" },
                        ],
                    },
                    { label: "Item 1.3" },
                    { label: "Item 1.4" },
                    { label: "Item 1.5" },
                ],
            },
            {
                label: "Item 2",
                children: [{ label: "Item 2.1" }, { label: "Item 2.2" }, { label: "Item 2.3" }, { label: "Item 2.4" }, { label: "Item 2.5" }],
            },
            { label: "Item 3" },
            { label: "Item 4" },
            { label: "Item 5" },
        ];

        this.list6 = [
            {
                label: "Item 1",
                children: [
                    {
                        label: "Item 1.1",
                        children: [
                            {
                                label: "Item 1.1.1",
                                children: [{ label: "Item 1.1.1.1" }, { label: "Item 1.1.1.2" }, { label: "Item 1.1.1.3" }, { label: "Item 1.1.1.4" }, { label: "Item 1.1.1.5" }],
                            },
                            {
                                label: "Item 1.1.2",
                                children: [{ label: "Item 1.1.2.1" }, { label: "Item 1.1.2.2" }, { label: "Item 1.1.2.3" }, { label: "Item 1.1.2.4" }, { label: "Item 1.1.2.5" }],
                            },
                            { label: "Item 1.1.3" },
                            { label: "Item 1.1.4" },
                            { label: "Item 1.1.5" },
                        ],
                    },
                    {
                        label: "Item 1.2",
                        children: [
                            {
                                label: "Item 1.2.1",
                                children: [{ label: "Item 1.2.1.1" }, { label: "Item 1.2.1.2" }, { label: "Item 1.2.1.3" }, { label: "Item 1.2.1.4" }, { label: "Item 1.2.1.5" }],
                            },
                            { label: "Item 1.2.2" },
                            { label: "Item 1.2.3" },
                            { label: "Item 1.2.4" },
                            { label: "Item 1.2.5" },
                        ],
                    },
                    { label: "Item 1.3" },
                    { label: "Item 1.4" },
                    { label: "Item 1.5" },
                ],
            },
            {
                label: "Item 2",
                children: [{ label: "Item 2.1" }, { label: "Item 2.2" }, { label: "Item 2.3" }, { label: "Item 2.4" }, { label: "Item 2.5" }],
            },
            { label: "Item 3" },
            { label: "Item 4" },
            { label: "Item 5" },
        ];
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">
            
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list ui="tree" .list="${this.list1}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list ui="level" .list="${this.list2}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list ui="accordion" .list="${this.list3}"></md-nested-list>
                </div>
                
            
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list ui="tree" .list="${this.list4}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list ui="level" .list="${this.list5}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list ui="accordion" .list="${this.list6}"></md-nested-list>
                </div>
                
            </div>
        `
    }
}

customElements.define("app-nested-list", AppNestedListElement);

export default document.createElement("app-nested-list");