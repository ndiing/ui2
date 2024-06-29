import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * A custom form component that extends MDComponent to handle form submissions and resets.
 * @extends MDComponent
 * @tagname md-form
 * @fires MDFormComponent#onFormNativeReset - Fires when the form is reset.
 * @fires MDFormComponent#onFormNativeSubmit - Fires when the form is submitted.
 */
class MDFormComponent extends MDComponent {
    /**
     * @property {String} acceptCharset - Character encodings that are to be used for the form submission.
     * @property {String} action - The URL that processes the form submission.
     * @property {String} autocomplete - Indicates whether the browser can automatically complete the form fields.
     * @property {String} enctype - The encoding type to use for form submission.
     * @property {String} method - The HTTP method to use for form submission (e.g., "get", "post").
     * @property {String} name - The name of the form.
     * @property {Boolean} novalidate - If true, the form will not be validated when submitted.
     * @property {String} target - The browsing context in which to display the response.
     * @property {String} rel - Specifies the relationship of the target object to the form.
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

    /**
     * Returns the native form element within the component.
     * @return {HTMLFormElement} The native form element.
     */
    get native() {
        return this.querySelector(".md-form__native");
    }

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
        `;
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

    /**
     * Resets the native form element.
     */
    reset() {
        this.native.reset();
    }

    /**
     * Submits the native form element.
     */
    submit() {
        this.native.submit();
    }
}

customElements.define("md-form", MDFormComponent);

export { MDFormComponent };
