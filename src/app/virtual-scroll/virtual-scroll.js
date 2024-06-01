import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { MDVirtualScrollModule } from "../../com/virtual-scroll/virtual-scroll";

class AppVirtualScrollElement extends MDElement {
    constructor() {
        super();
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">

                    <div id="viewport" style="width: calc(56px * 5);height: calc(56px * 5);" @onVirtualScrollChange="${this.handleVirtualScrollChange}">
                        <div id="scrollbar"></div>
                        <md-list 
                            id="container"
                            .list="${this.list}"
                            .singleSelection="${true}"
                            @onListItemClick="${this.handleListItemClick}"
                            @onListItemSelected="${this.handleListItemSelected}"
                        ></md-list>
                    </div>

                </div>
            </div>
        `
    }

    get viewport() {
        return this.querySelector("#viewport");
    }
    get scrollbar() {
        return this.querySelector("#scrollbar");
    }
    get container() {
        return this.querySelector("#container");
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.data = Array.from({ length: 500000 }, (v, k) => ({
            label: k + 1,
        }));
        this.virtualScroll = new MDVirtualScrollModule(this.viewport, {
            scrollbar: this.scrollbar,
            container: this.container,
            total: this.data.length,
            itemHeight: 56,
        });
    }

    handleVirtualScrollChange(event) {
        const { start, end } = event.detail;
        this.list = this.data.slice(start, end);
        this.requestUpdate();
    }

    handleListItemClick(event) {}

    handleListItemSelected(event) {}

    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.virtualScroll.destroy();
    }
}

customElements.define("app-virtual-scroll", AppVirtualScrollElement);

export default document.createElement("app-virtual-scroll");
