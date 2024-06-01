import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppNavigationElement extends MDElement{
    constructor(){
        super()

        
        this.list1=[
            {leadingIcon:'image',label:'Label 1',selected:true},
            {leadingIcon:'image',label:'Label 2',badge:{label:0}},
            {leadingIcon:'image',label:'Label 3',badge:{label:1}},
            {leadingIcon:'image',label:'Label 4',badge:{label:1000}},
        ]
        this.list2=[
            {leadingIcon:'image',selected:true},
            {leadingIcon:'image',badge:{label:0}},
            {leadingIcon:'image',badge:{label:1}},
            {leadingIcon:'image',badge:{label:1000}},
        ]
        
        this.list3=[
            {leadingIcon:'image',label:'Label 1',selected:true},
            {leadingIcon:'image',label:'Label 2',badge:{label:0}},
            {leadingIcon:'image',label:'Label 3',badge:{label:1}},
            {leadingIcon:'image',label:'Label 4',badge:{label:1000}},
        ]
        this.list4=[
            {label:'Label 1',selected:true},
            {label:'Label 2',badge:{label:0}},
            {label:'Label 3',badge:{label:1}},
            {label:'Label 4',badge:{label:1000}},
        ]
        
        this.list5=[
            {leadingIcon:'image',label:'Label 1',selected:true},
            {leadingIcon:'image',label:'Label 2',badge:{label:0}},
            {leadingIcon:'image',label:'Label 3',badge:{label:1}},
            {leadingIcon:'image',label:'Label 4',badge:{label:1000}},
        ]
        this.list6=[
            {leadingIcon:'image',selected:true},
            {leadingIcon:'image',badge:{label:0}},
            {leadingIcon:'image',badge:{label:1}},
            {leadingIcon:'image',badge:{label:1000}},
        ]
        
        this.list9=[
            {leadingIcon:'image',label:'Label 1',selected:true},
            {leadingIcon:'image',label:'Label 2',badge:{label:0}},
            {leadingIcon:'image',label:'Label 3',badge:{label:1}},
            {leadingIcon:'image',label:'Label 4',badge:{label:1000}},
        ]
        this.list10=[
            {label:'Label 1',selected:true},
            {label:'Label 2',badge:{label:0}},
            {label:'Label 3',badge:{label:1}},
            {label:'Label 4',badge:{label:1000}},
        ]

    
        this.list7=[
            {leadingIcon:'image',label:'Label 1',selected:true},
            {leadingIcon:'image',label:'Label 2',badge:{label:0}},
            {leadingIcon:'image',label:'Label 3',badge:{label:1}},
            {leadingIcon:'image',label:'Label 4',badge:{label:1000}},
        ]
        this.list8=[
            {label:'Label 1',selected:true},
            {label:'Label 2',badge:{label:0}},
            {label:'Label 3',badge:{label:1}},
            {label:'Label 4',badge:{label:1000}},
        ]
        
        this.list11=[
            {leadingIcon:'image',label:'Label 1',selected:true},
            {leadingIcon:'image',label:'Label 2',badge:{label:0}},
            {leadingIcon:'image',label:'Label 3',badge:{label:1}},
            {leadingIcon:'image',label:'Label 4',badge:{label:1000}},
        ]
        this.list12=[
            {label:'Label 1',selected:true},
            {label:'Label 2',badge:{label:0}},
            {label:'Label 3',badge:{label:1}},
            {label:'Label 4',badge:{label:1000}},
        ]
        
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">

                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-navigation-bar__list"
                        .list="${this.list1}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-navigation-bar__list"
                        .list="${this.list2}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-navigation-drawer__list"
                        .list="${this.list3}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-navigation-drawer__list"
                        .list="${this.list4}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-navigation-rail__list"
                        .list="${this.list5}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-navigation-rail__list"
                        .list="${this.list6}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-tab__list md-tab__list--primary"
                        .list="${this.list7}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-tab__list md-tab__list--primary"
                        .list="${this.list8}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-tab__list md-tab__list--secondary"
                        .list="${this.list11}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-tab__list md-tab__list--secondary"
                        .list="${this.list12}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-menu__list"
                        .list="${this.list9}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list 
                        class="md-menu__list"
                        .list="${this.list10}"
                        .singleSelection="${true}"
                    ></md-list>
                </div>
            
            </div>
        `
    }
}

customElements.define('app-navigation',AppNavigationElement)

export default document.createElement('app-navigation')