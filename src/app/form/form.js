import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppFormComponent extends MDElement {
    render() {
        return html`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div
                    style=""
                    class="md-layout-grid"
                >
                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <label for="">
                            text
                            <input
                                type="text"
                                name="text"
                            />
                        </label>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <label for="">
                            datetime-local
                            <input
                                type="datetime-local"
                                name="datetime-local"
                            />
                        </label>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <label for="">
                            date
                            <input
                                type="date"
                                name="date"
                            />
                        </label>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <label for="">
                            month
                            <input
                                type="month"
                                name="month"
                            />
                        </label>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <label for="">
                            week
                            <input
                                type="week"
                                name="week"
                            />
                        </label>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <label for="">
                            time
                            <input
                                type="time"
                                name="time"
                            />
                        </label>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <label for="">
                            reset
                            <input
                                type="reset"
                                name="reset"
                            />
                        </label>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <label for="">
                            submit
                            <input
                                type="submit"
                                name="submit"
                            />
                        </label>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleFormNativeReset() {}

    handleFormNativeSubmit(event) {
        const formData = new FormData(event.currentTarget.native.value);
        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object, null, 4);
        console.log(json);
    }
}

customElements.define("app-form", AppFormComponent);

export default document.createElement("app-form");
