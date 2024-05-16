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
                            {label:'Item 1',children:[
                                {label:'Item 1.1',children:[
                                    {label:'Item 1.1.1',children:[
                                        {label:'Item 1.1.1.1',},
                                        {label:'Item 1.1.1.2',},
                                        {label:'Item 1.1.1.3',selected:true},
                                        {label:'Item 1.1.1.4',},
                                        {label:'Item 1.1.1.5',},
                                    ]},
                                    {label:'Item 1.1.2',expanded:true,children:[
                                        {label:'Item 1.1.2.1',},
                                        {label:'Item 1.1.2.2',},
                                        {label:'Item 1.1.2.3',},
                                        {label:'Item 1.1.2.4',},
                                        {label:'Item 1.1.2.5',},
                                    ]},
                                    {label:'Item 1.1.3',},
                                    {label:'Item 1.1.4',},
                                    {label:'Item 1.1.5',},
                                ]},
                                {label:'Item 1.2',expanded:true,children:[
                                    {label:'Item 1.2.1',},
                                    {label:'Item 1.2.2',},
                                    {label:'Item 1.2.3',},
                                    {label:'Item 1.2.4',},
                                    {label:'Item 1.2.5',},
                                ]},
                                {label:'Item 1.3',children:[
                                    {label:'Item 1.3.1',},
                                    {label:'Item 1.3.2',},
                                    {label:'Item 1.3.3',},
                                    {label:'Item 1.3.4',},
                                    {label:'Item 1.3.5',},
                                ]},
                                {label:'Item 1.4',},
                                {label:'Item 1.5',},
                            ]},
                            {label:'Item 2',children:[
                                {label:'Item 2.1',},
                                {label:'Item 2.2',},
                                {label:'Item 2.3',},
                                {label:'Item 2.4',},
                                {label:'Item 2.5',},
                            ]},
                            {label:'Item 3',children:[
                                {label:'Item 3.1',},
                                {label:'Item 3.2',},
                                {label:'Item 3.3',},
                                {label:'Item 3.4',},
                                {label:'Item 3.5',},
                            ]},
                            {label:'Item 4',},
                            {label:'Item 5',},
                        ]}"
                    ></md-nested-list>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list
                        ui="card"
                        .list="${[
                            {label:'Item 1',children:[
                                {label:'Item 1.1',children:[
                                    {label:'Item 1.1.1',children:[
                                        {label:'Item 1.1.1.1',},
                                        {label:'Item 1.1.1.2',},
                                        {label:'Item 1.1.1.3',selected:true},
                                        {label:'Item 1.1.1.4',},
                                        {label:'Item 1.1.1.5',},
                                    ]},
                                    {label:'Item 1.1.2',expanded:true,children:[
                                        {label:'Item 1.1.2.1',},
                                        {label:'Item 1.1.2.2',},
                                        {label:'Item 1.1.2.3',},
                                        {label:'Item 1.1.2.4',},
                                        {label:'Item 1.1.2.5',},
                                    ]},
                                    {label:'Item 1.1.3',},
                                    {label:'Item 1.1.4',},
                                    {label:'Item 1.1.5',},
                                ]},
                                {label:'Item 1.2',expanded:true,children:[
                                    {label:'Item 1.2.1',},
                                    {label:'Item 1.2.2',},
                                    {label:'Item 1.2.3',},
                                    {label:'Item 1.2.4',},
                                    {label:'Item 1.2.5',},
                                ]},
                                {label:'Item 1.3',children:[
                                    {label:'Item 1.3.1',},
                                    {label:'Item 1.3.2',},
                                    {label:'Item 1.3.3',},
                                    {label:'Item 1.3.4',},
                                    {label:'Item 1.3.5',},
                                ]},
                                {label:'Item 1.4',},
                                {label:'Item 1.5',},
                            ]},
                            {label:'Item 2',children:[
                                {label:'Item 2.1',},
                                {label:'Item 2.2',},
                                {label:'Item 2.3',},
                                {label:'Item 2.4',},
                                {label:'Item 2.5',},
                            ]},
                            {label:'Item 3',children:[
                                {label:'Item 3.1',},
                                {label:'Item 3.2',},
                                {label:'Item 3.3',},
                                {label:'Item 3.4',},
                                {label:'Item 3.5',},
                            ]},
                            {label:'Item 4',},
                            {label:'Item 5',},
                        ]}"
                    ></md-nested-list>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list
                        ui="accordion"
                        .list="${[
                            {label:'Item 1',children:[
                                {label:'Item 1.1',children:[
                                    {label:'Item 1.1.1',children:[
                                        {label:'Item 1.1.1.1',},
                                        {label:'Item 1.1.1.2',},
                                        {label:'Item 1.1.1.3',selected:true},
                                        {label:'Item 1.1.1.4',},
                                        {label:'Item 1.1.1.5',},
                                    ]},
                                    {label:'Item 1.1.2',expanded:true,children:[
                                        {label:'Item 1.1.2.1',},
                                        {label:'Item 1.1.2.2',},
                                        {label:'Item 1.1.2.3',},
                                        {label:'Item 1.1.2.4',},
                                        {label:'Item 1.1.2.5',},
                                    ]},
                                    {label:'Item 1.1.3',},
                                    {label:'Item 1.1.4',},
                                    {label:'Item 1.1.5',},
                                ]},
                                {label:'Item 1.2',expanded:true,children:[
                                    {label:'Item 1.2.1',},
                                    {label:'Item 1.2.2',},
                                    {label:'Item 1.2.3',},
                                    {label:'Item 1.2.4',},
                                    {label:'Item 1.2.5',},
                                ]},
                                {label:'Item 1.3',children:[
                                    {label:'Item 1.3.1',},
                                    {label:'Item 1.3.2',},
                                    {label:'Item 1.3.3',},
                                    {label:'Item 1.3.4',},
                                    {label:'Item 1.3.5',},
                                ]},
                                {label:'Item 1.4',},
                                {label:'Item 1.5',},
                            ]},
                            {label:'Item 2',children:[
                                {label:'Item 2.1',},
                                {label:'Item 2.2',},
                                {label:'Item 2.3',},
                                {label:'Item 2.4',},
                                {label:'Item 2.5',},
                            ]},
                            {label:'Item 3',children:[
                                {label:'Item 3.1',},
                                {label:'Item 3.2',},
                                {label:'Item 3.3',},
                                {label:'Item 3.4',},
                                {label:'Item 3.5',},
                            ]},
                            {label:'Item 4',},
                            {label:'Item 5',},
                        ]}"
                    ></md-nested-list>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-nested-list", DevNestedList);

export default document.createElement("dev-nested-list");
