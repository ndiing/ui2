import { html } from "lit";
import { MDElement } from "../../material/element/element.js";
import icons from "./icons.json";
import { MDVirtualController } from "../../material/virtual/virtual.js";
import { createRef, ref } from "lit/directives/ref.js";

const rows = [];
for (const icon of icons) {
    rows.push([icon]);
    if (icon.children) {
        let limit = 24;
        let pages = Math.ceil(icon.children.length / limit);
        for (let i = 0; i < pages; i++) {
            let start = i * limit;
            let end = start + limit;
            rows.push(icon.children.slice(start, end));
        }
    }
}

class AppIconComponent extends MDElement {
    constructor() {
        super();
        this.rows = [];
        this.addEventListener("onScroll", () => {
            this.rows = rows.slice(this.virtual.rowStart, this.virtual.rowEnd);
            this.requestUpdate();
            this.scrollbar.value.style.height = this.virtual.scrollbarHeight + "px";
            this.scrollbar.value.style.width = this.virtual.scrollbarWidth + "px";
            this.container.value.style.transform = `translate3d(${this.virtual.translateX || 0}px,${this.virtual.translateY}px,0)`;
        });
        this.virtual = new MDVirtualController(this, {
            viewportSelector: ".md-virtual",
            totalRows: rows.length,
            rowHeight: 48,
        });
    }

    scrollbar = createRef();
    container = createRef();

    render() {
        return html`
            <div
                style="min-height:0;min-width:0;width:100%;height:100%;margin:0;padding:24px;"
                class="md-layout-grid"
            >
                <div
                    style="min-height:0;min-width:0;width:100%;height:100%;"
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <div class="md-virtual">
                        <div
                            class="md-virtual__scrollbar"
                            ${ref(this.scrollbar)}
                        ></div>
                        <div
                            class="md-virtual__container"
                            ${ref(this.container)}
                        >
                            <div class="body">
                                ${this.rows.map(
                                    (row) => html`
                                        <div class="row">
                                            ${row.map((item) =>
                                                item.icon
                                                    ? html`
                                                          <md-icon
                                                              class="column"
                                                              title="${item.label}"
                                                              >${item.icon}</md-icon
                                                          >
                                                      `
                                                    : html` <div class="column label">${item.label}</div> `,
                                            )}
                                        </div>
                                    `,
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("app-icon", AppIconComponent);

export default document.createElement("app-icon");
