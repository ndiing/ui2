import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppNestedListElement extends MDElement{

    constructor(){
        super()

        this.nested-list1=[
            {avatar:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {avatar:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text'},
            {avatar:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline'},
        ]
        this.nested-list2=[
            {trailingCheckbox:{},avatar:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},avatar:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text'},
            {trailingCheckbox:{},avatar:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline'},
        ]

        this.nested-list3=[
            {thumbnail:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {thumbnail:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text'},
            {thumbnail:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline'},
        ]
        this.nested-list4=[
            {trailingCheckbox:{},thumbnail:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},thumbnail:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text'},
            {trailingCheckbox:{},thumbnail:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline'},
        ]

        this.nested-list5=[
            {video:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {video:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text'},
            {video:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline'},
        ]
        this.nested-list6=[
            {trailingCheckbox:{},video:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},video:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline',subLabel:'Supporting text'},
            {trailingCheckbox:{},video:'https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70',label:'Headline'},
        ]

        this.nested-list7=[
            {leadingIcon:'image',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {leadingIcon:'image',label:'Headline',subLabel:'Supporting text'},
            {leadingIcon:'image',label:'Headline'},
        ]
        this.nested-list8=[
            {trailingCheckbox:{},leadingIcon:'image',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},leadingIcon:'image',label:'Headline',subLabel:'Supporting text'},
            {trailingCheckbox:{},leadingIcon:'image',label:'Headline'},
        ]

        this.nested-list9=[
            {label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {label:'Headline',subLabel:'Supporting text'},
            {label:'Headline'},
        ]
        this.nested-list10=[
            {trailingCheckbox:{},label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},label:'Headline',subLabel:'Supporting text'},
            {trailingCheckbox:{},label:'Headline'},
        ]

        this.nested-list11=[
            {leadingCheckbox:{},label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {leadingCheckbox:{},label:'Headline',subLabel:'Supporting text'},
            {leadingCheckbox:{},label:'Headline'},
        ]
        this.nested-list12=[
            {leadingCheckbox:{},text:'100+',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {leadingCheckbox:{},text:'100+',label:'Headline',subLabel:'Supporting text'},
            {leadingCheckbox:{},text:'100+',label:'Headline'},
        ]

        this.nested-list13=[
            {leadingRadioButton:{},label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {leadingRadioButton:{},label:'Headline',subLabel:'Supporting text'},
            {leadingRadioButton:{},label:'Headline'},
        ]
        this.nested-list14=[
            {leadingRadioButton:{},text:'100+',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {leadingRadioButton:{},text:'100+',label:'Headline',subLabel:'Supporting text'},
            {leadingRadioButton:{},text:'100+',label:'Headline'},
        ]

        this.nested-list15=[
            {trailingSwitch:{},label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {trailingSwitch:{},label:'Headline',subLabel:'Supporting text'},
            {trailingSwitch:{},label:'Headline'},
        ]
        this.nested-list16=[
            {trailingSwitch:{},leadingIcon:'image',label:'Headline',subLabel:'Supporting text that is long enough to fill up multiple lines'},
            {trailingSwitch:{},leadingIcon:'image',label:'Headline',subLabel:'Supporting text'},
            {trailingSwitch:{},leadingIcon:'image',label:'Headline'},
        ]

    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">
            
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list1}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list2}"></md-nested-list>
                </div>
                

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list3}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list4}"></md-nested-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list5}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list6}"></md-nested-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list7}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list8}"></md-nested-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list9}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list10}"></md-nested-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list11}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list12}"></md-nested-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list13}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list14}"></md-nested-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list15}"></md-nested-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-nested-list .nested-list="${this.nested-list16}"></md-nested-list>
                </div>

            </div>
        `
    }
}

customElements.define('app-nested-list',AppNestedListElement)

export default document.createElement('app-nested-list')