import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevList extends MDElement {
    constructor(){
        super()

        this.list=[
            {avatar:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {avatar:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text'},
            {avatar:'https://placehold.co/200x200',label:'Headline',},
        ]
        this.list2=[
            {trailingCheckbox:{},avatar:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},avatar:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text'},
            {trailingCheckbox:{},avatar:'https://placehold.co/200x200',label:'Headline',},
        ]

        this.list3=[
            {image:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {image:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text'},
            {image:'https://placehold.co/200x200',label:'Headline',},
        ]
        this.list4=[
            {trailingCheckbox:{},image:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},image:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text'},
            {trailingCheckbox:{},image:'https://placehold.co/200x200',label:'Headline',},
        ]

        this.list5=[
            {video:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {video:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text'},
            {video:'https://placehold.co/200x200',label:'Headline',},
        ]
        this.list6=[
            {trailingCheckbox:{},video:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},video:'https://placehold.co/200x200',label:'Headline',labelSecondary:'Supporting text'},
            {trailingCheckbox:{},video:'https://placehold.co/200x200',label:'Headline',},
        ]

        this.list7=[
            {icon:'favorite',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {icon:'favorite',label:'Headline',labelSecondary:'Supporting text'},
            {icon:'favorite',label:'Headline',},
        ]
        this.list8=[
            {trailingCheckbox:{},icon:'favorite',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},icon:'favorite',label:'Headline',labelSecondary:'Supporting text'},
            {trailingCheckbox:{},icon:'favorite',label:'Headline',},
        ]

        this.list9=[
            {label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {label:'Headline',labelSecondary:'Supporting text'},
            {label:'Headline',},
        ]
        this.list10=[
            {trailingCheckbox:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {trailingCheckbox:{},label:'Headline',labelSecondary:'Supporting text'},
            {trailingCheckbox:{},label:'Headline',},
        ]

        this.list11=[
            {leadingCheckbox:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {leadingCheckbox:{},label:'Headline',labelSecondary:'Supporting text'},
            {leadingCheckbox:{},label:'Headline',},
        ]
        this.list12=[
            {leadingCheckbox:{},text:'100+',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {leadingCheckbox:{},text:'100+',label:'Headline',labelSecondary:'Supporting text'},
            {leadingCheckbox:{},text:'100+',label:'Headline',},
        ]

        this.list13=[
            {leadingRadioButton:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {leadingRadioButton:{},label:'Headline',labelSecondary:'Supporting text'},
            {leadingRadioButton:{},label:'Headline',},
        ]
        this.list14=[
            {leadingRadioButton:{},text:'100+',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {leadingRadioButton:{},text:'100+',label:'Headline',labelSecondary:'Supporting text'},
            {leadingRadioButton:{},text:'100+',label:'Headline',},
        ]

        this.list15=[
            {trailingSwitch:{},label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {trailingSwitch:{},label:'Headline',labelSecondary:'Supporting text'},
            {trailingSwitch:{},label:'Headline',},
        ]
        this.list16=[
            {trailingSwitch:{},icon:'favorite',label:'Headline',labelSecondary:'Supporting text that is long enough to fill up multiple lines'},
            {trailingSwitch:{},icon:'favorite',label:'Headline',labelSecondary:'Supporting text'},
            {trailingSwitch:{},icon:'favorite',label:'Headline',},
        ]
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list2}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list3}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list4}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list5}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list6}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list7}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list8}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list9}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list10}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list11}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list12}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list13}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list14}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list15}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${this.list16}" allSelection="true" rangeSelection="true" multiSelection="true" singleSelection="true"></md-list>
                </div>
                
            </div>
        `;
    }
}

customElements.define("dev-list", DevList);

export default document.createElement("dev-list");
