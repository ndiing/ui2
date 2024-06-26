import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @extends MDComponent
 * @tagname md-form
 * @fires MDFormComponent#onFormNativeReset -
 * @fires MDFormComponent#onFormNativeSubmit -
 */
class MDFormComponent extends MDComponent {
    /**
     * @property {String} acceptCharset -
     * @property {String} action -
     * @property {String} autocomplete -
     * @property {String} enctype -
     * @property {String} method -
     * @property {String} name -
     * @property {Boolean} novalidate -
     * @property {String} target -
     * @property {String} rel -
     */
    static properties = {
        acceptCharset: { type: String },
        action: { type: String },
        autocomplete: { type: String },
        enctype: { type: String },
        method: { type: String },
        name: { type: String },
        novalidate: { type: Boolean },
        target: { type: String },
        rel: { type: String },
    };

    constructor() {
        super();

        this.method = "post";
        this.enctype = "application/x-www-form-urlencoded";
        this.acceptCharset = "UTF-8";

        this.body = Array.from(this.childNodes);
    }

    render() {
        /* prettier-ignore */
        return html`
            <form 
                class="md-form__native"
                .acceptCharset="${ifDefined(this.acceptCharset)}"
                .action="${ifDefined(this.action)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .enctype="${ifDefined(this.enctype)}"
                .method="${ifDefined(this.method)}"
                .name="${ifDefined(this.name)}"
                .novalidate="${ifDefined(this.novalidate)}"
                .target="${ifDefined(this.target)}"
                .rel="${ifDefined(this.rel)}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.body}</form>
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-form");
    }

    handleFormNativeReset(event) {
        for (const element of event.currentTarget.elements) {
            const customEvent = new CustomEvent("reset", {
                bubbles: true,
                cancelable: true,
                detail: event,
            });
            element.dispatchEvent(customEvent);
        }

        this.emit("onFormNativeReset", event);
    }

    handleFormNativeSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {};
        for (const [name, value] of formData.entries()) {
            if (data[name]) {
                if (Array.isArray(data[name])) {
                    data[name].push(value);
                } else {
                    data[name] = [data[name], value];
                }
            } else {
                data[name] = value;
            }
        }
        event.formData = formData;
        event.data = data;
        this.emit("onFormNativeSubmit", event);
    }
}

customElements.define("md-form", MDFormComponent);

export { MDFormComponent };
