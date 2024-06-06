import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { notEmpty, notNull } from "../mixin/mixin";

class MDDataTableColumnCellComponent extends HTMLTableCellElement{
    constructor(){
        super()
        this.callback=this.callback.bind(this)
        this.resizeObserver=new ResizeObserver(this.callback)
    }
    callback(entries){
        window.requestAnimationFrame(() => {
            for(const entry of entries){
                // console.log(entry)
                if(this.classList.contains('md-data-table__sticky--left')){
                    let prev = this.previousElementSibling
                    let left=0
                    while(prev){
                        if(prev.classList.contains('md-data-table__sticky--left')){
                            left+=prev.getBoundingClientRect().width
                        }
                        prev = prev.previousElementSibling
                    }
                    this.style.setProperty('left',left+'px')
                    let next=this.nextElementSibling
                    if(!next.classList.contains('md-data-table__sticky--left')){
                        this.classList.add('md-data-table__sticky--end')
                    }
                }
                else if(this.classList.contains('md-data-table__sticky--right')){
                    let next = this.nextElementSibling
                    let right=0
                    while(next){
                        if(next.classList.contains('md-data-table__sticky--right')){
                            right+=next.getBoundingClientRect().width
                        }
                        next = next.nextElementSibling
                    }
                    this.style.setProperty('right',right+'px')
                    let prev=this.previousElementSibling
                    if(!prev.classList.contains('md-data-table__sticky--right')){
                        this.classList.add('md-data-table__sticky--start')
                    }
                }
            }
        })
    }
    connectedCallback(){
        this.resizeObserver.observe(this)
    }
    disconnectedCallback(){
        this.resizeObserver.disconnect()
    }
}
customElements.define('md-data-table-column-cell',MDDataTableColumnCellComponent,{extends:'th'})
class MDDataTableRowCellComponent extends MDDataTableColumnCellComponent{}
customElements.define('md-data-table-row-cell',MDDataTableRowCellComponent,{extends:'td'})

/**
 *
 * @extends MDElement
 */
class MDDataTableItemComponent extends MDElement {
    /**
     * Properties of the MDDataTableItemComponent.
     * @property {String} [avatar] - URL of the avatar image.
     * @property {String} [thumbnail] - URL of the thumbnail image.
     * @property {String} [video] - URL of the video.
     * @property {Object} [leadingCheckbox] - Leading checkbox object.
     * @property {Object} [leadingRadioButton] - Leading radio button object.
     * @property {Object} [leadingSwitch] - Leading switch object.
     * @property {String} [leadingIcon] - Leading icon name.
     * @property {String} [label] - Main label text.
     * @property {String} [subLabel] - Sublabel text.
     * @property {String} [trailingIcon] - Trailing icon name.
     * @property {Object} [trailingCheckbox] - Trailing checkbox object.
     * @property {Object} [trailingRadioButton] - Trailing radio button object.
     * @property {Object} [trailingSwitch] - Trailing switch object.
     * @property {String} [text] - Additional text content.
     * @property {Object} [badge] - Badge object.
     * @property {Boolean} [selected] - Indicates if the item is selected.
     * @property {String} [routerLink] - URL for router link.
     */
    static get properties() {
        return {
            avatar: { type: String },
            thumbnail: { type: String },
            video: { type: String },
            leadingCheckbox: { type: Object },
            leadingRadioButton: { type: Object },
            leadingSwitch: { type: Object },
            leadingIcon: { type: String },
            label: { type: String },
            subLabel: { type: String },
            trailingIcon: { type: String },
            trailingCheckbox: { type: Object },
            trailingRadioButton: { type: Object },
            trailingSwitch: { type: Object },
            text: { type: String },
            badge: { type: Object },
            selected: { type: Boolean, reflect: true },
            routerLink: { type: String, reflect: true },
            indeterminate: { type: Boolean},
            sortable: { type: Boolean},
            sortableIcon: { type: String},
        };
    }

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.avatar?html`<md-image class="md-data-table__avatar" .src="${this.avatar}" .ui="${"rounded"}"></md-image>`:nothing}
            ${this.thumbnail?html`<md-image class="md-data-table__thumbnail" .src="${this.thumbnail}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-data-table__video" .src="${this.video}" .ratio="${4/3}"></md-image>`:nothing}

            ${this.leadingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.leadingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.leadingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>`:nothing}

            ${this.leadingIcon?html`<md-icon class="md-data-table__icon">${this.leadingIcon}</md-icon>`:nothing}
            <!-- ${this.sortable?html`<md-icon-button @click="${this.handleDataTableItemSortableClick}" class="md-data-table__sortable">${this.sortableIcon}</md-icon-button>`:nothing} -->

            ${notNull(this.label)||this.subLabel||this.badge?html`
                <div class="md-data-table__label">
                    ${notNull(this.label)?html`<div class="md-data-table__label-primary">${this.label}</div>`:nothing}
                    ${this.subLabel?html`<div class="md-data-table__label-secondary">${this.subLabel}</div>`:nothing}
                    ${this.badge?html`<md-badge class="md-data-table__badge" .label="${ifDefined(this.badge?.label??this.badge)}" .max="${ifDefined(this.badge.max)}"></md-badge>`:nothing}
                </div>
            `:nothing}

            ${this.sortable?html`<md-icon-button @click="${this.handleDataTableItemSortableClick}" class="md-data-table__sortable">${this.sortableIcon}</md-icon-button>`:nothing}
            ${this.trailingIcon?html`<md-icon class="md-data-table__icon">${this.trailingIcon}</md-icon>`:nothing}

            ${this.trailingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.trailingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.trailingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>`:nothing}

            ${this.text?html`<div class="md-data-table__text">${this.text}</div>`:nothing}
        `;
    }

    /**
     *
     */
    get labelSecondary() {
        return this.querySelector(".md-data-table__label-secondary");
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-table__item");
        await this.updateComplete;

        if (this.labelSecondary) {
            if (this.labelSecondary.scrollHeight > this.labelSecondary.clientHeight) {
                this.classList.add("md-data-table__item--three-line");
            } else {
                this.classList.add("md-data-table__item--two-line");
            }
        }
        
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-table__item");
        await this.updateComplete;
        
    }

    firstUpdated(changedProperties) {}
    
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSelected
     */
    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onDataTableItemSelected", this);
            }
        }
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSortableClick
    */
    handleDataTableItemSortableClick(event) {
        this.emit("onDataTableItemSortableClick", event);
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemCheckboxNativeInput
     */
    handleDataTableItemCheckboxNativeInput(event) {
        this.emit("onDataTableItemCheckboxNativeInput", event);
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemRadioButtonNativeInput
     */
    handleDataTableItemRadioButtonNativeInput(event) {
        this.emit("onDataTableItemRadioButtonNativeInput", event);
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSwitchNativeInput
     */
    handleDataTableItemSwitchNativeInput(event) {
        this.emit("onDataTableItemSwitchNativeInput", event);
    }
}

customElements.define("md-data-table-item", MDDataTableItemComponent);

/**
 *
 * @extends MDElement
 */
class MDDataTableComponent extends MDElement {
    /**
     * Properties of the MDDataTableComponent.
     * @property {Array} [list] - The array of items to display in the list.
     * @property {Boolean} [rangeSelection] - Indicates if range selection is enabled.
     * @property {Boolean} [multiSelection] - Indicates if multiple selection is enabled.
     * @property {Boolean} [singleSelection] - Indicates if single selection is enabled.
     * @property {Boolean} [allSelection] - Indicates if selecting all items is enabled.
     */
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
            summaries: { type: Array },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },
            allSelection: { type: Boolean },
            checkbox: { type: Boolean },
        };
    }

    /**
     *
     */
    constructor() {
        super();

        this.rangeSelection=true
        this.multiSelection=true
        this.singleSelection=true
        this.allSelection=true
    }

    /**
     *
     */
    renderItem(item) {
        /* prettier-ignore */
        return html`
            <md-data-table-item
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .thumbnail="${ifDefined(item.thumbnail)}"
                .video="${ifDefined(item.video)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .leadingIcon="${ifDefined(item.leadingIcon)}"
                .label="${ifDefined(item.label)}"
                .subLabel="${ifDefined(item.subLabel)}"
                .trailingIcon="${ifDefined(item.trailingIcon)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .badge="${ifDefined(item.badge)}"
                .text="${ifDefined(item.text)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                .sortable="${ifDefined(item.sortable)}"
                .sortableIcon="${ifDefined(item.sortableIcon)}"
            ></md-data-table-item>
        `;
    }

    /**
     *
     */
    render() {
        return html`
            <table>
                <caption></caption>
                <thead>
                    <tr>
                        ${this.columns?.length&&this.checkbox?html`
                            <th
                                is="md-data-table-column-cell"
                                class="${classMap({
                                    'md-data-table__column-cell-checkbox':true,
                                    'md-data-table__sticky':true,
                                    'md-data-table__sticky--column':true,
                                    'md-data-table__sticky--left':true,
                                })}"
                                @onDataTableItemCheckboxNativeInput="${this.handleDataTableColumnCellCheckboxInput}"
                            >${this.renderItem({
                                leadingCheckbox:{},
                                selected:this.selected,
                                indeterminate:this.indeterminate,
                            })}</th>
                        `:nothing}
                        ${this.columns?.map((column,index) => html`
                            <th
                                is="md-data-table-column-cell"
                                .data="${column}"
                                style="${styleMap({
                                    'min-width':column.width+'px'
                                })}"
                                class="${classMap({
                                    'md-data-table__sticky':column.sticky,
                                    'md-data-table__sticky--column':column.sticky,
                                    'md-data-table__sticky--left':column.sticky&&index<Math.ceil(this.columns?.length/2),
                                    'md-data-table__sticky--right':column.sticky&&index>Math.floor(this.columns?.length/2),
                                })}"
                                @pointerenter="${this.handleDataTableColumnCellSortablePointerenter}"
                                @pointerleave="${this.handleDataTableColumnCellSortablePointerleave}"
                                @onDataTableItemSortableClick="${this.handleDataTableColumnCellSortableClick}"
                            >${this.renderItem({
                                label:column.label,
                                sortable:column.sortable,
                                sortableIcon:column.sortableIcon,
                            })}</th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.rows?.map(row => html`
                        <tr
                            .data="${row}"
                            .tabIndex="${0}"
                            ?selected="${row.selected}"
                            @click="${this.handleDataTableRowClick}"
                            @onDataTableItemCheckboxNativeInput="${this.handleDataTableRowCellCheckboxInput}"
                        >
                            ${this.checkbox?html`
                                <td
                                    is="md-data-table-row-cell"
                                    class="${classMap({
                                        'md-data-table__row-cell-checkbox':true,
                                        'md-data-table__sticky':true,
                                        'md-data-table__sticky--row':true,
                                        'md-data-table__sticky--left':true,
                                    })}"
                                >${this.renderItem({
                                    leadingCheckbox:{},
                                    selected:row.selected
                                })}</td>
                            `:nothing}
                            ${this.columns?.map((column,index) => html`
                                <td
                                    is="md-data-table-row-cell"
                                    class="${classMap({
                                        'md-data-table__sticky':column.sticky,
                                        'md-data-table__sticky--row':column.sticky,
                                        'md-data-table__sticky--left':column.sticky&&index<Math.ceil(this.columns?.length/2),
                                        'md-data-table__sticky--right':column.sticky&&index>Math.floor(this.columns?.length/2),
                                    })}"
                                >${this.renderItem({
                                    label:row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tbody>
                <!-- <tfoot>
                    <tr>
                        <td></td>
                    </tr>
                </tfoot> -->
            </table>
        `
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataTableKeydown);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classList.remove("md-data-table");
        this.removeEventListener("keydown", this.handleDataTableKeydown);
    }

    updated(changedProperties) {}

    get selected(){
        const selected = this.rows?.filter(row=>row.selected)?.length
        return selected>0&&selected==this.rows?.length
    }
    
    get indeterminate(){
        const selected = this.rows?.filter(row=>row.selected)?.length
        return selected>0&&selected<this.rows?.length
    }
    
    /**
     *
     */
    handleDataTableColumnCellCheckboxInput(event) {
        const checked = event.detail.currentTarget.checked;
        this.rows.forEach(row=>{
            row.selected=checked
        })
        this.requestUpdate();
        this.emit('onDataTableColumnCellCheckboxInput',event)
    }
    
    /**
     *
     */
    handleDataTableColumnCellSortablePointerenter(event) {
        const data=event.currentTarget.data
        if(data.sortable&&!data.order){
            data.sortableIcon='arrow_upward'
            this.requestUpdate()
        }
        this.emit('onDataTableColumnCellSortablePointerenter',event)
    }
    
    /**
     *
     */
    handleDataTableColumnCellSortablePointerleave(event) {
        const data=event.currentTarget.data
        if(data.sortable&&!data.order){
            data.sortableIcon=''
            this.requestUpdate()
        }
        this.emit('onDataTableColumnCellSortablePointerleave',event)
    }
    
    /**
     *
     */
    handleDataTableColumnCellSortableClick(event) {
        const data=event.currentTarget.data
        if(data.sortable){
            if(!data.order){
                data.order='asc'
                data.sortableIcon='arrow_upward'
            }
            else if(data.order=='asc'){
                data.order='desc'
                data.sortableIcon='arrow_downward'
            }
            else {
                data.order=''
                data.sortableIcon=''
            }
            this.requestUpdate()
        }
        this.emit('onDataTableColumnCellSortableClick',event)
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableRowClick
     */
    handleDataTableRowClick(event) {
        if (event.target.closest(".md-data-table__checkbox,.md-data-table__radio-button,.md-data-table__switch")) {
            return;
        }
        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            if (this.lastIndex == undefined) {
                this.lastIndex = 0;
            }
            this.currentIndex = this.rows.indexOf(data);
            this.swapIndex = this.lastIndex > this.currentIndex;

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
            this.rows.forEach((row, index) => {
                row.selected = index >= this.lastIndex && index <= this.currentIndex;
            });

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.rows.forEach((row) => {
                row.selected = row == data;
            });
            this.lastIndex = this.rows.indexOf(data);
        }
        this.requestUpdate();
        this.emit("onDataTableRowClick", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableKeydown
     */
    handleDataTableKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            event.preventDefault();
            this.rows.forEach((row) => {
                row.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onDataTableKeydown", event);
    }

    /**
     *
     */
    handleDataTableRowCellCheckboxInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        this.emit('onDataTableRowCellCheckboxInput',event)
    }

}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent, MDDataTableItemComponent };
