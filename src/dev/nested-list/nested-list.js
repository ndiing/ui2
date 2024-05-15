import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevNestedList extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column md-layout-fit" style="padding: 24px;">
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list
                        ui="tree"
                        .list="${[
                            {label:'Item 1',nodeIcons:['lock','lock_open'],children:[
                                {label:'Item 1.1',nodeIcons:['lock','lock_open'],children:[
                                    {label:'Item 1.1.1',expanded:true,nodeIcons:['lock','lock_open'],children:[
                                        {label:'Item 1.1.1.1',leafIcon:'image',},
                                        {label:'Item 1.1.1.2',leafIcon:'image',},
                                        {label:'Item 1.1.1.3',leafIcon:'image',},
                                        {label:'Item 1.1.1.4',leafIcon:'image',},
                                        {label:'Item 1.1.1.5',leafIcon:'image',},
                                    ]},
                                    {label:'Item 1.1.2',nodeIcons:['lock','lock_open'],children:[
                                        {label:'Item 1.1.2.1',leafIcon:'image',},
                                        {label:'Item 1.1.2.2',leafIcon:'image',},
                                        {label:'Item 1.1.2.3',selected:true,leafIcon:'image',},
                                        {label:'Item 1.1.2.4',leafIcon:'image',},
                                        {label:'Item 1.1.2.5',leafIcon:'image',},
                                    ]},
                                    {label:'Item 1.1.3',leafIcon:'image',},
                                    {label:'Item 1.1.4',leafIcon:'image',},
                                    {label:'Item 1.1.5',leafIcon:'image',},
                                ]},
                                {label:'Item 1.2',nodeIcons:['lock','lock_open'],children:[
                                    {label:'Item 1.2.1',leafIcon:'image',},
                                    {label:'Item 1.2.2',leafIcon:'image',},
                                    {label:'Item 1.2.3',leafIcon:'image',},
                                    {label:'Item 1.2.4',leafIcon:'image',},
                                    {label:'Item 1.2.5',leafIcon:'image',},
                                ]},
                                {label:'Item 1.3',nodeIcons:['lock','lock_open'],children:[
                                    {label:'Item 1.3.1',leafIcon:'image',},
                                    {label:'Item 1.3.2',leafIcon:'image',},
                                    {label:'Item 1.3.3',leafIcon:'image',},
                                    {label:'Item 1.3.4',leafIcon:'image',},
                                    {label:'Item 1.3.5',leafIcon:'image',},
                                ]},
                                {label:'Item 1.4',leafIcon:'image',},
                                {label:'Item 1.5',leafIcon:'image',},
                            ]},
                            {label:'Item 2',nodeIcons:['lock','lock_open'],children:[
                                {label:'Item 2.1',leafIcon:'image',},
                                {label:'Item 2.2',leafIcon:'image',},
                                {label:'Item 2.3',leafIcon:'image',},
                                {label:'Item 2.4',leafIcon:'image',},
                                {label:'Item 2.5',leafIcon:'image',},
                            ]},
                            {label:'Item 3',nodeIcons:['lock','lock_open'],children:[
                                {label:'Item 3.1',leafIcon:'image',},
                                {label:'Item 3.2',leafIcon:'image',},
                                {label:'Item 3.3',leafIcon:'image',},
                                {label:'Item 3.4',leafIcon:'image',},
                                {label:'Item 3.5',leafIcon:'image',},
                            ]},
                            {label:'Item 4',leafIcon:'image',},
                            {label:'Item 5',leafIcon:'image',},
                        ]}"
                    ></md-nested-list>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list
                        ui="card"
                        .list="${[
                            {label:'Item 1',nodeIcons:['lock','lock_open'],children:[
                                {label:'Item 1.1',nodeIcons:['lock','lock_open'],children:[
                                    {label:'Item 1.1.1',nodeIcons:['lock','lock_open'],children:[
                                        {label:'Item 1.1.1.1',leafIcon:'image',},
                                        {label:'Item 1.1.1.2',leafIcon:'image',},
                                        {label:'Item 1.1.1.3',leafIcon:'image',},
                                        {label:'Item 1.1.1.4',leafIcon:'image',},
                                        {label:'Item 1.1.1.5',leafIcon:'image',},
                                    ]},
                                    {label:'Item 1.1.2',nodeIcons:['lock','lock_open'],children:[
                                        {label:'Item 1.1.2.1',leafIcon:'image',},
                                        {label:'Item 1.1.2.2',leafIcon:'image',},
                                        {label:'Item 1.1.2.3',selected:true,leafIcon:'image',},
                                        {label:'Item 1.1.2.4',leafIcon:'image',},
                                        {label:'Item 1.1.2.5',leafIcon:'image',},
                                    ]},
                                    {label:'Item 1.1.3',leafIcon:'image',},
                                    {label:'Item 1.1.4',leafIcon:'image',},
                                    {label:'Item 1.1.5',leafIcon:'image',},
                                ]},
                                {label:'Item 1.2',nodeIcons:['lock','lock_open'],children:[
                                    {label:'Item 1.2.1',leafIcon:'image',},
                                    {label:'Item 1.2.2',leafIcon:'image',},
                                    {label:'Item 1.2.3',leafIcon:'image',},
                                    {label:'Item 1.2.4',leafIcon:'image',},
                                    {label:'Item 1.2.5',leafIcon:'image',},
                                ]},
                                {label:'Item 1.3',nodeIcons:['lock','lock_open'],children:[
                                    {label:'Item 1.3.1',leafIcon:'image',},
                                    {label:'Item 1.3.2',leafIcon:'image',},
                                    {label:'Item 1.3.3',leafIcon:'image',},
                                    {label:'Item 1.3.4',leafIcon:'image',},
                                    {label:'Item 1.3.5',leafIcon:'image',},
                                ]},
                                {label:'Item 1.4',leafIcon:'image',},
                                {label:'Item 1.5',leafIcon:'image',},
                            ]},
                            {label:'Item 2',nodeIcons:['lock','lock_open'],children:[
                                {label:'Item 2.1',leafIcon:'image',},
                                {label:'Item 2.2',leafIcon:'image',},
                                {label:'Item 2.3',leafIcon:'image',},
                                {label:'Item 2.4',leafIcon:'image',},
                                {label:'Item 2.5',leafIcon:'image',},
                            ]},
                            {label:'Item 3',nodeIcons:['lock','lock_open'],children:[
                                {label:'Item 3.1',leafIcon:'image',},
                                {label:'Item 3.2',leafIcon:'image',},
                                {label:'Item 3.3',leafIcon:'image',},
                                {label:'Item 3.4',leafIcon:'image',},
                                {label:'Item 3.5',leafIcon:'image',},
                            ]},
                            {label:'Item 4',leafIcon:'image',},
                            {label:'Item 5',leafIcon:'image',},
                        ]}"
                    ></md-nested-list>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list
                        ui="accordion"
                        .list="${[
                            {label:'Item 1',nodeIcons:['lock','lock_open'],children:[
                                {label:'Item 1.1',nodeIcons:['lock','lock_open'],children:[
                                    {label:'Item 1.1.1',expanded:true,nodeIcons:['lock','lock_open'],children:[
                                        {label:'Item 1.1.1.1',leafIcon:'image',},
                                        {label:'Item 1.1.1.2',leafIcon:'image',},
                                        {label:'Item 1.1.1.3',leafIcon:'image',},
                                        {label:'Item 1.1.1.4',leafIcon:'image',},
                                        {label:'Item 1.1.1.5',leafIcon:'image',},
                                    ]},
                                    {label:'Item 1.1.2',nodeIcons:['lock','lock_open'],children:[
                                        {label:'Item 1.1.2.1',leafIcon:'image',},
                                        {label:'Item 1.1.2.2',leafIcon:'image',},
                                        {label:'Item 1.1.2.3',selected:true,leafIcon:'image',},
                                        {label:'Item 1.1.2.4',leafIcon:'image',},
                                        {label:'Item 1.1.2.5',leafIcon:'image',},
                                    ]},
                                    {label:'Item 1.1.3',leafIcon:'image',},
                                    {label:'Item 1.1.4',leafIcon:'image',},
                                    {label:'Item 1.1.5',leafIcon:'image',},
                                ]},
                                {label:'Item 1.2',nodeIcons:['lock','lock_open'],children:[
                                    {label:'Item 1.2.1',leafIcon:'image',},
                                    {label:'Item 1.2.2',leafIcon:'image',},
                                    {label:'Item 1.2.3',leafIcon:'image',},
                                    {label:'Item 1.2.4',leafIcon:'image',},
                                    {label:'Item 1.2.5',leafIcon:'image',},
                                ]},
                                {label:'Item 1.3',nodeIcons:['lock','lock_open'],children:[
                                    {label:'Item 1.3.1',leafIcon:'image',},
                                    {label:'Item 1.3.2',leafIcon:'image',},
                                    {label:'Item 1.3.3',leafIcon:'image',},
                                    {label:'Item 1.3.4',leafIcon:'image',},
                                    {label:'Item 1.3.5',leafIcon:'image',},
                                ]},
                                {label:'Item 1.4',leafIcon:'image',},
                                {label:'Item 1.5',leafIcon:'image',},
                            ]},
                            {label:'Item 2',nodeIcons:['lock','lock_open'],children:[
                                {label:'Item 2.1',leafIcon:'image',},
                                {label:'Item 2.2',leafIcon:'image',},
                                {label:'Item 2.3',leafIcon:'image',},
                                {label:'Item 2.4',leafIcon:'image',},
                                {label:'Item 2.5',leafIcon:'image',},
                            ]},
                            {label:'Item 3',nodeIcons:['lock','lock_open'],children:[
                                {label:'Item 3.1',leafIcon:'image',},
                                {label:'Item 3.2',leafIcon:'image',},
                                {label:'Item 3.3',leafIcon:'image',},
                                {label:'Item 3.4',leafIcon:'image',},
                                {label:'Item 3.5',leafIcon:'image',},
                            ]},
                            {label:'Item 4',leafIcon:'image',},
                            {label:'Item 5',leafIcon:'image',},
                        ]}"
                    ></md-nested-list>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("dev-nested-list", DevNestedList);

export default document.createElement("dev-nested-list");
